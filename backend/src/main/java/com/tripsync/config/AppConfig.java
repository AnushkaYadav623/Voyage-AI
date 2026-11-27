package com.tripsync.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

/**
  General Application Configuration for TripSync AI.
 
  Contains beans shared across the application.
 
  WHY RestTemplate:
  We will use RestTemplate to call the Python FastAPI AI service
  from our Spring Boot backend. This bean is registered here so it
  can be injected wherever needed (e.g., AIIntegrationService).
 */
@Configuration
public class AppConfig {

    /**
      RestTemplate bean for making HTTP calls to external services.
      Used primarily to communicate with the Python FastAPI AI microservice.
     */
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
