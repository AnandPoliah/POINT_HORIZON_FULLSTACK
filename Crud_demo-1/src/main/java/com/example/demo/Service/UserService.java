package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.Entity.UserEntity;
import com.example.demo.Repo.UserRepo;

@Service
public class UserService 
{
	@Autowired
	public UserRepo ur;
	
	public List<UserEntity> getUser()
	{
		return ur.findAll();
	}
	
	public List<UserEntity> saveuser( List<UserEntity> ue)
	{
		return ur.saveAll(ue);
	}
	
	public String deleteuser(int id)
	{
		ur.deleteById(id);
		return "deleted successfully";
	}
	
	public String saveUserparam(@RequestParam("name") String name,
								@RequestParam("u_name") String u_name,
								@RequestParam("password") String password)
	{
		UserEntity um = new UserEntity();
		um.setU_Name((u_name));
		um.setPassword(password);
		ur.save(um);
		return "data Addedda";
			
	}
	
	public String UpdateUser(UserEntity ue)
    {
         ur.save(ue);
         return"data Updated";
    }
	
	//isEmpty and isPresent 
	public Optional<UserEntity> userviewbyid(int id)
	{
		return ur.findById(id);
	}
}
