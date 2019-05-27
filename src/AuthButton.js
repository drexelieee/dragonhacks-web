import React, { Component } from "react";
import * as firebase from "firebase";
import {app} from "./App";
import styles from "./AuthButton.module.css";
import Google from "./images/google.svg";
import GitHub from "./images/github.svg";

const logos = {
    Google,
    GitHub,
}
export default class AuthButton extends Component {
    constructor(props) {
        super();

        switch (props.provider.id) {
            case 1:
                this.provider = new firebase.auth.GoogleAuthProvider();
                break;
            case 2:
                this.provider = new firebase.auth.GithubAuthProvider();
                break;

            default:
                break;
        }

        this.auth_onClick = this.auth_onClick.bind(this);
        this.getLogo = this.getLogo.bind(this);
    }

    auth_onClick() {
        app.auth().signInWithPopup(this.provider).then((result) => {
            console.log(result);
        });
    }

    async getLogo() {
        return await import(
            /* webpackMode: "lazy-once" */
            this.props.provider.logo
        ).default;
    }

    render() {
        return (
            <button className={`${styles.authButton} ${styles[this.props.provider.name.toLowerCase()]}`} onClick={this.auth_onClick}>
                <img className={styles.logo} src={logos[this.props.provider.name]} />
                <span className={styles.innerText}>Sign in with {this.props.provider.name}</span>
            </button>
        );
    }
}

export const GoogleProvider = {
    id: 1,
    name: "Google",
};
export const GitHubProvider = {
    id: 2,
    name: "GitHub",
};