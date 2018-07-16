<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function blog(){
        $title = 'Welcome To  BlogHome';
       // return view('pages.index',compact('title'));
       return view('Front.blog');
    }
}
