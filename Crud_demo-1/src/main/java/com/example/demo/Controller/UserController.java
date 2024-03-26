package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.UserEntity;
import com.example.demo.Service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController 
{
	@Autowired
	public UserService us;
	
	@GetMapping("/getuser")
	public List<UserEntity> getdata()
	{
		return us.getUser();
	}
	
	@PostMapping("/saveuser")
	public List<UserEntity> saveuser(@RequestBody List<UserEntity> ue)
	{
		return us.saveuser(ue);
	}
	
//	@PostMapping("/saveuserss")
//	  public String saveUser(String name,
//	                         String u_name,
//	                         String password) 
//	{
//	    UserEntity user=new UserEntity();
//	    user.setU_Name(u_name);
//	    user.setPassword(password);
//	    
//	    return us.saveUserparam(name,u_name,password);
//	  }
	
	@PutMapping("/updateuser/{id}")
	public String updateuser(@RequestBody UserEntity ue, @PathVariable int id)
	{
		ue.setId(id);
		return us.UpdateUser(ue);
	}
	
	@DeleteMapping("/deleteuser/{id}")
	public String deleteUser(@PathVariable int id)
	{
		return us.deleteuser(id);
	}
	
	@GetMapping("/userbyid/{id}")
	public Optional<UserEntity> getuser(@PathVariable int id)
	{
		return us.userviewbyid(id);
	}
}
