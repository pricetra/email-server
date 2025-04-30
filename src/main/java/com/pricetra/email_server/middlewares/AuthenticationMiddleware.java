package com.pricetra.email_server.middlewares;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class AuthenticationMiddleware extends OncePerRequestFilter {
    private final String JWT_KEY = System.getenv("JWT_KEY");
    private final Algorithm algorithm = Algorithm.HMAC256(JWT_KEY);

    private DecodedJWT verifyJwt(String token) {
        JWTVerifier verifier = JWT.require(algorithm)
                // specify any specific claim validations
                .withIssuer("pricetra")
                // reusable verifier instance
                .build();
        return verifier.verify(token);
    }

    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request,
                                    @NonNull HttpServletResponse response,
                                    @NonNull FilterChain filterChain) throws ServletException, IOException {
        if (System.getenv("ENV").equals("development")) {
            filterChain.doFilter(request, response);
            return;
        }

        final String authHeader = request.getHeader("Authorization");
        if (authHeader == null) throw new ServletException("unauthorized");

        String[] parsedAuthHeader = authHeader.split(" ");

        if (parsedAuthHeader.length != 2 || !parsedAuthHeader[0].equals("Bearer")) {
            throw new ServletException("unauthorized");
        }

        String token = parsedAuthHeader[1];
        this.verifyJwt(token);
        filterChain.doFilter(request, response);
    }
}
