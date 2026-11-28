package com.tripsync.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * Health Check Controller for TripSync AI.
 *
 * Provides a simple endpoint to verify that the backend is running
 * and responding to HTTP requests.
 *
 * WHY THIS IS USEFUL:
 * - Quick verification during development that the app started successfully.
 * - Frontend team can ping this to confirm backend availability.
 * - Deployment health checks (Render, Docker) use this to monitor uptime.
 */
@RestController
@RequestMapping("/api")
public class HealthController {

    /**
     * GET /api/health
     *
     * Returns a simple JSON response confirming the backend is running.
     *
     * Response example:
     * {
     *   "status": "UP",
     *   "application": "TripSync AI Backend",
     *   "timestamp": "2026-11-27T19:00:00"
     * }
     */
    @GetMapping("/health")
    public ResponseEntity<Map<String, Object>> healthCheck() {
        Map<String, Object> response = new LinkedHashMap<>();
        response.put("status", "UP");
        response.put("application", "TripSync AI Backend");
        response.put("timestamp", LocalDateTime.now().toString());
        return ResponseEntity.ok(response);
    }
}
