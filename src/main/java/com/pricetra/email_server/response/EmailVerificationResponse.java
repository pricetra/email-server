package com.pricetra.email_server.response;

import java.io.Serializable;

public class EmailVerificationResponse extends EmailResponse implements Serializable {
    public String code;
    public String name;
}
