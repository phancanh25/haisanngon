package com.example.haisanngon.dto.response;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ErrorResponse {
    private String code;

    private String field;

    private String message;

    public ErrorResponse() {}

    public ErrorResponse(String code, String field, String message) {
        this.code = code;
        this.field = field;
        this.message = message;
    }
}
