package configuration;

import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.crypto.SecretKey;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service

public class JwtProvider {
	
	static SecretKey key=Keys.hmacShaKeyFor(JwtConstant.JWT_SECRET.getBytes());
	
	public String generateToken(Authentication authentication) {
		
		Collection<? extends GrantedAuthority> authorities = 
				authentication.getAuthorities();
		
		String roles= populateAuthorities(authorities);
		
		return Jwts.builder()
				.issuedAt(new Date())
				.expiration(new Date(new Date().getTime()+ 8640000))
				.claim("email", authentication.getName())
				.claim("authorities", roles)
				.signWith(key)
				.compact();
		
	}
	
	
	public String getEmailFromToken(String jwt) {
		jwt=jwt.substring(7);
		Claims claims = Jwts.parser() //JwtParserBuilder
				.verifyWith(key)
				.build() //JwtParser
				.parseSignedClaims(jwt) //Jws<Claims>
				.getPayload();
		
		String email = String.valueOf(claims.get("email"));
		
		return String.valueOf(claims.get("email"));
		
	}

	private String populateAuthorities(Collection<? extends GrantedAuthority> authorities) {
		
		
		Set<String> auths = new HashSet<>();
		for(GrantedAuthority authority: authorities) {
			auths.add(authority.getAuthority());
		}
		return String.join(",", auths);
	}

}


