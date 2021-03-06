---
title: Creating a RESTful API with Golang
description: Getting started with golang
date: 2021-07-17T14:00:00.000+00:00
tags:
- blog
layout: layouts/post.njk
feature_image: img/golang.png
featured: "1"

---
### Overview

Golang from Google is an open-source programming language that works great for any applications above the Network layer. It's a statically typed language that feels similar to a dynamically typed language and is an easy language for developers to learn and be productive with quickly. Great thing about Golang is that it is compiled into a single binary making it fast and portable. Some notable features of Go include:

* Strong Typing
* Garbage collection
* Excellent concurrency features
* Fast compile times

### Applications of Golang

Although Golang was primarily developed by Google for their Google Cloud Plaforms' infrastructure to solve issues related to scalability. However, it has found a number of different applications in the last decade including:

* Web Applications
* Command-line tools
* Data processing and Machine learning

Getting started with Go is a simple endeavor. The following steps will get you started with your own Golang web server.

### Initializing Go

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
    	Event{Id: "111", Name: "birthday", Desc: "jimmy's birthday", PhoneNumber: "+6141698059"},
    	Event{Id: "112", Name: "anniversary", Desc: "jimmy's anniversary", PhoneNumber: "+6141612059"},
    	Event{Id: "113", Name: "xmas", Desc: "Xmas", PhoneNumber: "+61416918123"},
    	Event{Id: "114", Name: "custom", Desc: "custom event", PhoneNumber: "+6141691549"},
    }
    
    func ping(w http.ResponseWriter, r *http.Request) {
    	fmt.Fprintf(w, "Server is running!")
    	fmt.Println("pong")
    }
    
    func getAllEvents(w http.ResponseWriter, r *http.Request) {
    	fmt.Println("retrieving all events")
    	json.NewEncoder(w).Encode(events)
    }
    
    func handleRequests() {
    	http.HandleFunc("/", ping)
    	http.HandleFunc("/Events", getAllEvents)
    	log.Fatal(http.ListenAndServe(":8080", nil))
    }
    
    func main() {
    	fmt.Println("Starting Go Server !")
    	handleRequests()
    }

Let's go through the code line by line:

    package main
    
    import (
    	"encoding/json"
    	"fmt"
    	"log"
    	"net/http"
    )

The first line tells the compiler to execute this program. Then we import the packages we require including `encoding/json` for encoding and decoding JSON objects, `fmt` for I/O, `log` for logging purposes and `net/http` will help set up our HTTP server.

    type Event struct {
    	Id          string `json:"id"`
    	Name        string `json:"name"`
    	Desc        string `json:"desc"`
    	PhoneNumber string `json:"phoneNumber"`
    }
    
    var events = []Event{
    	Event{Id: "111", Name: "birthday", Desc: "jimmy's birthday", PhoneNumber: "+6141698059"},
    	Event{Id: "112", Name: "anniversary", Desc: "jimmy's anniversary", PhoneNumber: "+6141612059"},
    	Event{Id: "113", Name: "xmas", Desc: "Xmas", PhoneNumber: "+61416918123"},
    	Event{Id: "114", Name: "custom", Desc: "custom event", PhoneNumber: "+6141691549"},
    }

Next, we define structs. For those familiar with C programming structs are a way of organizing data. Here we define the shape of our data consisting of a collection of string variables. Then we define an array of structs using the `[]` character. 

    func ping(w http.ResponseWriter, r *http.Request) {
    	fmt.Fprintf(w, "Server is running!")
    	fmt.Println("pong")
    }
    
    func getAllEvents(w http.ResponseWriter, r *http.Request) {
    	fmt.Println("retrieving all events")
    	json.NewEncoder(w).Encode(events)
    }
    
    func handleRequests() {
    	http.HandleFunc("/", ping)
    	http.HandleFunc("/Events", getAllEvents)
    	log.Fatal(http.ListenAndServe(":8080", nil))
    }
    
    func main() {
    	fmt.Println("Starting Go Server !")
    	handleRequests()
    }

Now in our `main()` function which will be executed first, we call the `handleRequests` function which sets up two endpoints: `/` and `/getAllEvents` and attach the respective handler functions. Then, we can output a JSON response from our defined array of structs using `json.NewEncoder()` function.

After that, simply use this command to run the app:

`go run .`

And voila, there you have it. Your Golang server should be running in the port specified (8080). 

Thanks for reading!

#### Few Notes

* When defining variables inside `struct` make sure they are capital letters or they will not be exported. And many JSON packages cannot read those variables. **Reference**: [https://stackoverflow.com/questions/50319404/has-json-tag-but-not-exported](https://stackoverflow.com/questions/50319404/has-json-tag-but-not-exported "https://stackoverflow.com/questions/50319404/has-json-tag-but-not-exported")