---
title: Creating a RESTful API with Golang
description: Getting started with golang
date: 2021-07-17T14:00:00Z
tags:
- blog
layout: layouts/post.njk

---
### Overview

Golang from Google is what the cool kids are using nowadays. So to get in on the hype. Here's how to get started by building your own API.

#### Initializing Go

Create a directory for your shiny new Go project.

    mkdir goProject
    cd goProject

Much like `node` Go has a dependency tracker. To initialize it run

    go mod init example.com/main

Create a `main.go` file and add the following code:

    package main
    
    import (
    	"encoding/json"
    	"fmt"
    	"log"
    	"net/http"
    )
    
    type Event struct {
    	Id          string `json:"id"`
    	Name        string `json:"name"`
    	Desc        string `json:"desc"`
    	PhoneNumber string `json:"phoneNumber"`
    }
    
    var events = []Event{
    	Event{Id: "111", Name: "birthday", Desc: "jimmy's birthday", PhoneNumber: "+61416918059"},
    	Event{Id: "112", Name: "anniversary", Desc: "jimmy's anniversary", PhoneNumber: "+61416918059"},
    	Event{Id: "113", Name: "xmas", Desc: "Xmas", PhoneNumber: "+61416918059"},
    	Event{Id: "114", Name: "custom", Desc: "custom event", PhoneNumber: "+61416918059"},
    }
    
    func ping(w http.ResponseWriter, r *http.Request) {
    	fmt.Fprintf(w, "Server is running!")
    	fmt.Println("pong")
    }
    
    func getAllEvents(w http.ResponseWriter, r *http.Request) {
    	fmt.Println("retrieving all events")
    	json.NewEncoder(w).Encode(events)
    }
    
    // TODO: Add APIS to send messages
    
    func handleRequests() {
    	http.HandleFunc("/", ping)
    	http.HandleFunc("/getAllEvents", getAllEvents)
    	log.Fatal(http.ListenAndServe(":8080", nil))
    }
    
    func main() {
    	fmt.Println("Starting Go Server !")
    	handleRequests()
    }

Then simply use this command to run the app:

`go run .`

And voila, there you have it. Your own Golang server.

#### Few Notes

* When defining variables inside `struct` make sure they are capital letters or they will not be exported. And many JSON packages cannot read those variables. **Reference**: [https://stackoverflow.com/questions/50319404/has-json-tag-but-not-exported](https://stackoverflow.com/questions/50319404/has-json-tag-but-not-exported "https://stackoverflow.com/questions/50319404/has-json-tag-but-not-exported")