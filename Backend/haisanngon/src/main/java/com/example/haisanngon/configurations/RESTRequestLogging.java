package com.example.haisanngon.configurations;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.AbstractRequestLoggingFilter;

import javax.servlet.http.HttpServletRequest;
import java.util.Set;

@Configuration
public class RESTRequestLogging  extends AbstractRequestLoggingFilter {
    private static final Logger logger= LogManager.getLogger();
    private static final Set<String> unWantedURLs =Set.of("/fccServices/heartBeat");

    public RESTRequestLogging() {
        super.setIncludePayload(true);
        super.setMaxPayloadLength(1000000);
        super.setIncludeQueryString(true);
        super.setIncludeHeaders(false);
    }

    @Override
    protected void beforeRequest(HttpServletRequest httpServletRequest, String message) {
    }

    @Override
    protected void afterRequest(HttpServletRequest httpServletRequest, String message) {
        if(!unWantedURLs.contains(httpServletRequest.getRequestURI())) {
            logger.debug(message);
        }
    }
}
