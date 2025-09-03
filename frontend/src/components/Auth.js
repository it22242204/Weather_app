import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Auth = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    if (isAuthenticated) {
        return React.createElement(
            "div",
            {
                style: {
                    display: "flex",
                    justifyContent: "space-between", 
                    alignItems: "center",
                    margin: "0 auto",  
                    padding: "10px 20px",
                },
            },
            React.createElement(
                "span",
                { style: { fontSize: "1.2rem", fontWeight: "bold" } },
                `Welcome, ${user?.name || user?.email}!`
            ),
            React.createElement(
                "button",
                {
                    style: {
                        backgroundColor: "#e31111ff",
                        color: "#fff",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "6px",
                        cursor: "pointer",
                        alignContent: "end"
                    },
                    onClick: () =>
                        logout({ logoutParams: { returnTo: window.location.origin } }),
                },
                "Logout"
            )
        );
    }

    return React.createElement(
        "div",
        {
            style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "50vh",
                gap: "10px",
            },
        },
        React.createElement(
            "span",
            { style: { fontSize: "1.2rem", color: "#333" } },
            "Please log in to access weather data."
        ),
        React.createElement(
            "button",
            {
                style: {
                    backgroundColor: "#4a90e2",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "6px",
                    cursor: "pointer",
                },
                onClick: () => loginWithRedirect(),
            },
            "Login to View Weather"
        )
    );
};

export default Auth;
