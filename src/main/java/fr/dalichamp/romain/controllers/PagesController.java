package fr.dalichamp.romain.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class PagesController {
	
	@GetMapping("/") //comment
	public String homeGet(@RequestParam(required=false, defaultValue = "World") String name, Model model) {
		model.addAttribute("name", name);
		return "pages/home";
	}
	
	@PostMapping("/")
	public String homePost(@RequestParam(required=false, defaultValue = "WorldPost") String namePost, Model model) {
		model.addAttribute("namePost", namePost);
		return "pages/home";
	}
}