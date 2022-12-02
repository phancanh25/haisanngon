package com.example.haisanngon.aop;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;
import java.util.stream.Collectors;

@Aspect
@Configuration
public class ServiceLoggingAspect {
    private static final Logger logger= LogManager.getLogger();
    @Pointcut("!@annotation(com.example.haisanngon.anotations.logging.NoLogging) " +
            "&& (within(com.example.haisanngon.services..*))")
//    @Pointcut("within(com.example.haisanngon.services..*)")
    public void loggableServiceMethods(){
    }

    @Around("loggableServiceMethods()")
    public Object logMethodArgumentValues(ProceedingJoinPoint joinPoint) throws Throwable{
        logger.debug(joinPoint.getSignature() + "has arguments {}", Arrays.stream(joinPoint.getArgs()).collect(Collectors.toList()));
        return joinPoint.proceed();
    }

    @AfterReturning(value = "loggableServiceMethods()",returning = "returnValue")
    public void logMethodReturnValue(JoinPoint joinPoint, Object returnValue) throws Throwable{
        logger.debug(joinPoint.getSignature() + " returned {}",returnValue);
    }

    @AfterThrowing(value = "loggableServiceMethods()",throwing = "e")
    public void logExceptions(JoinPoint joinPoint,Exception e){
        logger.error("Exception thrown from {}",joinPoint.toShortString(),e);
    }
}
