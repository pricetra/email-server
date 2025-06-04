package com.pricetra.email_server.dto;

public class PasswordResetRequest extends EmailRequest {
    public String code;
    public String fullName;
    public String avatarUrl;
}
