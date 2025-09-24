package configuration;

import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;


import java.util.Arrays;
import jakarta.servlet.http.HttpServletRequest;

@Configuration

public class SecurityConfig {
	
	@Bean
	public SecurityFilterChain securityFilterChain(
			HttpSecurity http) throws Exception{
		
			return http
					.sessionManagement(menagement -> menagement.sessionCreationPolicy(SessionCreationPolicy.STATELESS)))
					.authorizeHttpRequests(Authorize ->
							Authorize.requestMatchers("/api/**")
							.authenticated()
							.requestMatchers("/api/super-admin/**")
							.hasRole("ADMIN")
							.anyRequest().permitAll()
								
					).addFilterBefore(new JwtValidator(),BasicAuthenticationFilter.class)
			
			.csrf(AbstractHttpConfigurer::disable)
					.cors(
							cors -> cors.configurationSource(corsConfigurationSource())
					).build();
			
		
		
		return httpSecurity;
		
	}			


private CorsConfigurationSource corsConfigurationSource() {
	return new CorsConfigurationSource() {
		
		@Override
		public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
			CorsConfiguration cfg= new CorsConfiguration();
			cfg.setAllowedOrigins(Arrays.asList("http://localhost:5173","http://localhost:3000"));
			cfg.setAllowedMethods(Collections.singletonList("*"));
			cfg.setAllowCredentials(true);
			cfg.setAllowedHeaders(Collections.singletonList("*"));
			cfg.setExposedHeaders(Arrays.asList("Authorization"));
			cfg.setMaxAge(3600L);
			return cfg;
		}
	};
	}
}



