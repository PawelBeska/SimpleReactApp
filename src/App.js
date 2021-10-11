import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/global/HeaderComponent';
import IndexBodyComponent from "./components/pages/index/IndexBodyComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarComponent from './components/global/SidebarComponent'
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import React, {Component} from 'react';


const user = () => {
    return (
        <div id="wrapper">
            <SidebarComponent/>
        </div>
    );
}


export default user

