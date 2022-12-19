package com.example.haisanngon.exception;

public class HSNException extends Exception{
    private static final long serialVersionUID = -2141667605444500016L;

    /**
     *
     */
    public HSNException() {
        super();
        // TODO Auto-generated constructor stub
    }

    /**
     * @param message
     * @param cause
     * @param enableSuppression
     * @param writableStackTrace
     */
    public HSNException(String message, Throwable cause, boolean enableSuppression,
                                     boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
        // TODO Auto-generated constructor stub
    }

    /**
     * @param message
     * @param cause
     */
    public HSNException(String message, Throwable cause) {
        super(message, cause);
        // TODO Auto-generated constructor stub
    }

    /**
     * @param message
     */
    public HSNException(String message) {
        super(message);
        // TODO Auto-generated constructor stub
    }

    /**
     * @param cause
     */
    public HSNException(Throwable cause) {
        super(cause);
        // TODO Auto-generated constructor stub
    }
}
