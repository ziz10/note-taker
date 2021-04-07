
const express = require("express");
const fs = require("fs");
const path = require("path");
const database = require("./db/db")

//======================================================================
// This sets up the Express App
//======================================================================

var app = express();
var PORT = process.env.PORT || 3000;

//==============================================================================
// Gotta link to my assets!
app.use(express.static('public'));

//==============================================================================
// This sets up data parsing-- Express will interpret it/format data as JSON.
// This is required for API calls!
//==============================================================================

app.use(express.urlencoded({ extended: true }));
app.use(express.json());