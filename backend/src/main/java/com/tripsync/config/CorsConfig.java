package com.tripsync.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
  CORS Configuration for TripSync AI.
 
  Allows the React frontend (running on localhost:3000 or localhost:5173)
  to communicate with this Spring Boot backend.
 
  WHY THIS IS NEEDED:
  Browsers block cross-origin requests by default (Same-Origin Policy).
  Since our React frontend runs on a different port than the backend,
  we must explicitly allow those origins.
 */
@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")           // Apply to all /api/ endpoints
                        .allowedOrigins(
                                "http://localhost:3000",  // React dev server (CRA)
                                "http://localhost:5173"   // React dev server (Vite)
                        )
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS")
                        .allowedHeaders("*")              // Allow all headers (including Authorization)
                        .allowCredentials(true)            // Allow cookies/auth headers
                        .maxAge(3600);                     // Cache preflight for 1 hour
            }
        };
    }
}
