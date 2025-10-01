package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import modal.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	User findByEmail(String email);
	

}
