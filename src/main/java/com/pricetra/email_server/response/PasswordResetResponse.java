package com.pricetra.email_server.response;

import java.io.Serializable;

public class PasswordResetResponse extends EmailResponse implements Serializable {
    public String code;
    public String fullName;
    public String avatarUrl;
}
