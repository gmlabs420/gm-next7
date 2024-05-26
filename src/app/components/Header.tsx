"use client"
import { ConnectButton } from "thirdweb/react";
import { walletConnect, inAppWallet, createWallet } from "thirdweb/wallets";
import { ThirdwebClient } from "thirdweb";

const wallets = [
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    walletConnect(),
    inAppWallet({
        auth: {
            options: [
                "email",
                "google",
                "apple",
                "facebook",
                "phone",
            ],
        },
    }),
    createWallet("me.rainbow"),
];

export default function Header({ client }: { client: ThirdwebClient }) {
    return (
        <header className="top-nav">
            <div className="left">
                <h1 className="londrina-solid-black">GM.v1</h1>
            </div>
            <div className="center">
                <h2>GM</h2>
                <div className="toggle-container">
                    <input type="checkbox" id="pageToggle" hidden checked />
                    <label htmlFor="pageToggle" className="toggle-label"></label>
                </div>
                <h2>GN</h2>
            </div>
            <div className="right">
                <nav className="dropdown">
                    <button id="dropdown-button" className="dropdown-button" aria-haspopup="true" aria-expanded="false">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGcgZGF0YS1uYW1lPSJmaWxsZWQgb3V0bGluZSI+PHBhdGggZD0iTTQ2NCAzNTguODZ2OTQuMjVhMjkuMjIzIDI5LjIyMyAwIDAgMS01Ljg1IDE3LjU1bC0yLjczIDMuNjRhMjkuMjQ5IDI5LjI0OSAwIDAgMS0zNy44IDcuOTFsLTUyLjE3LTI5LjQ4YTIyNy4xOTQgMjI3LjE5NCAwIDAgMC0yMjAtMS45OWwtNjIuMjYgMzMuNzNBMjkuMjU5IDI5LjI1OSAwIDAgMSA0MCA0NTguNzR2LTk5Ljg4bDkyLjAxLTIwLjQ0YTU2MC44IDU2MC44IDAgMCAxIDI0Ny43NSAxWiIgc3R5bGU9IiIgZmlsbD0iIzRjYWY1MCIgZGF0YS1vcmlnaW5hbD0iIzgzNGIxMCIgY2xhc3M9IiIgb3BhY2l0eT0iMSI+PC9wYXRoPjxwYXRoIGQ9Ik00NjQgMzU4Ljg2djU3LjE5YTI5LjIyMyAyOS4yMjMgMCAwIDEtNS44NSAxNy41NWwtMi43MyAzLjY0YTI5LjI0OSAyOS4yNDkgMCAwIDEtMzcuOCA3LjkxbC01Mi4xNy0yOS40OGEyMjcuMTY4IDIyNy4xNjggMCAwIDAtMjIwLTEuOTlsLTYyLjI2IDMzLjczQTI5LjI1OSAyOS4yNTkgMCAwIDEgNDAgNDIxLjY4di02Mi44Mmw5Mi4wMS0yMC40NGE1NjAuOCA1NjAuOCAwIDAgMSAyNDcuNzUgMVoiIHN0eWxlPSIiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiM3MDQwMGUiIGNsYXNzPSIiIG9wYWNpdHk9IjEiPjwvcGF0aD48cGF0aCBkPSJNNDg4IDI5Ni4wNiA0NzIgMzUybC0zOC44IDcuNzQtMjguMDctNy43NGE1NjAuODU3IDU2MC44NTcgMCAwIDAtMjk4LjI2IDBsLTI4LjA3IDcuNzRMNDAgMzUybC0xNi01NS45NGEyODAuNzI1IDI4MC43MjUgMCAwIDEgMTEuODQtODAuNjZsLjQ2LTEuNTNBMjExLjg1NiAyMTEuODU2IDAgMCAxIDE3Ny4xIDcyLjE5cTcuOTY1LTIuNDYgMTYuMTktNC4yOGEyMTAuNzgyIDIxMC43ODIgMCAwIDEgNDUuOTctNS4wNWgyNi42OGEyMTEuOTcyIDIxMS45NzIgMCAwIDEgNDMuNjUgNC41NWw3LjI2IDEuNTNxOS45OSAyLjEgMTkuNjMgNS4xM0EyMTEuODU3IDIxMS44NTcgMCAwIDEgNDc2LjE2IDIxNS40IDI4MS4wODggMjgxLjA4OCAwIDAgMSA0ODggMjk2LjA2WiIgc3R5bGU9IiIgZmlsbD0iI2ZmZmVmZSIgZGF0YS1vcmlnaW5hbD0iI2RiZGJkYiIgY2xhc3M9IiIgb3BhY2l0eT0iMSI+PC9wYXRoPjxwYXRoIGQ9Ik00ODggMjk2LjA2VjM0NGwtNTQuOC0xNS4xMi0yOC4wNy03Ljc0YTU2MC44NTcgNTYwLjg1NyAwIDAgMC0yOTguMjYgMGwtMjguMDcgNy43NEwyNCAzNDR2LTQ3Ljk0YTI4MC43MjUgMjgwLjcyNSAwIDAgMSAxMS44NC04MC42NmwuNDYtMS41M0EyMTEuODU2IDIxMS44NTYgMCAwIDEgMTc3LjEgNzIuMTlxNy45NjUtMi40NiAxNi4xOS00LjI4YTIxMC43ODIgMjEwLjc4MiAwIDAgMSA0NS45Ny01LjA1aDI2LjY4YTIxMS45NzIgMjExLjk3MiAwIDAgMSA0My42NSA0LjU1bDcuMjYgMS41M3E5Ljk5IDIuMSAxOS42MyA1LjEzQTIxMS44NTcgMjExLjg1NyAwIDAgMSA0NzYuMTYgMjE1LjQgMjgxLjA4OCAyODEuMDg4IDAgMCAxIDQ4OCAyOTYuMDZaIiBzdHlsZT0iIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjZWJlYmViIiBjbGFzcz0iIiBvcGFjaXR5PSIxIj48L3BhdGg+PHBhdGggZD0iTTI4OCA2NGgtNjR2LS42MDdBMzEuMzkzIDMxLjM5MyAwIDAgMSAyNTUuMzkzIDMyaDEuMjE0QTMxLjM5MyAzMS4zOTMgMCAwIDEgMjg4IDYzLjM5M1oiIHN0eWxlPSIiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiM3NDQ2MzAiIGNsYXNzPSIiIG9wYWNpdHk9IjEiPjwvcGF0aD48cGF0aCBkPSJNNzYuMjIgMjk5Ljk4cS0uNjYgMTQuNzc1LS4wNSAyOS42My42MyAxNS4wNiAyLjYzIDMwLjEzTDI0IDM3NC44NnYtNzguOGEyODAuNzI1IDI4MC43MjUgMCAwIDEgMTEuODQtODAuNjZsLjQ2LTEuNTNBMjExLjggMjExLjggMCAwIDEgMTc3LjEgNzIuMTlsLTIxLjk4IDI2LjFhMzM3LjE2NSAzMzcuMTY1IDAgMCAwLTc4LjkgMjAxLjY5Wk00ODggMjk2LjA2djc4LjhsLTU0LjgtMTUuMTJxMS45OTUtMTUuMDYgMi42My0zMC4xMy42My0xNC44NS0uMDUtMjkuNjNhMzM3LjE2NSAzMzcuMTY1IDAgMCAwLTc4LjktMjAxLjY5bC0yMC40LTI0LjIyQTIxMS44NzEgMjExLjg3MSAwIDAgMSA0NzYuMTYgMjE1LjQgMjgxLjA4OCAyODEuMDg4IDAgMCAxIDQ4OCAyOTYuMDZaIiBzdHlsZT0iIiBmaWxsPSIjNGNhZjUwIiBkYXRhLW9yaWdpbmFsPSIjODM0YjEwIiBjbGFzcz0iIiBvcGFjaXR5PSIxIj48L3BhdGg+PGNpcmNsZSBjeD0iMjU2IiBjeT0iMjE2IiByPSI1NiIgc3R5bGU9IiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzcwNDAwZSIgY2xhc3M9IiIgb3BhY2l0eT0iMSI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMjU2IiBjeT0iMjE2IiByPSI0OC41IiBzdHlsZT0iIiBmaWxsPSIjNGNhZjUwIiBkYXRhLW9yaWdpbmFsPSIjODM0YjEwIiBjbGFzcz0iIiBvcGFjaXR5PSIxIj48L2NpcmNsZT48cGF0aCBkPSJNMjU2IDI4MGE2NCA2NCAwIDEgMC02NC02NCA2NC4wNzIgNjQuMDcyIDAgMCAwIDY0IDY0Wm0wLTExMmE0OCA0OCAwIDEgMS00OCA0OCA0OC4wNTQgNDguMDU0IDAgMCAxIDQ4LTQ4WiIgZmlsbD0iIzAwMDAwMCIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Ik03Ni4xNyAzMjkuNjFxLjYzIDE1LjA2IDIuNjMgMzAuMTNMMjQgMzc0Ljg2VjM0NFpNNDg4IDM0NHYzMC44NmwtNTQuOC0xNS4xMnExLjk5NS0xNS4wNiAyLjYzLTMwLjEzWiIgc3R5bGU9IiIgZmlsbD0iIzRjYWY1MCIgZGF0YS1vcmlnaW5hbD0iIzc0NDMwZSIgY2xhc3M9IiIgb3BhY2l0eT0iMSI+PC9wYXRoPjxwYXRoIGQ9Im0zMTguNSA2MS4xMDctNy4yNjItMS41MjhxLTcuODMzLTEuNjUtMTUuNzg5LTIuNzE0QTM5LjQ0NiAzOS40NDYgMCAwIDAgMjU2LjYxIDI0aC0xLjIyYTM5LjQ0NyAzOS40NDcgMCAwIDAtMzguNjkgMzIuMDM5IDIyMC4xNTkgMjIwLjE1OSAwIDAgMC0yNS4xNDIgNC4wNjFxLTguNDQgMS44NzYtMTYuNjI4IDQuMzkybC0uMDc2LjAyM0EyMjAuMTM5IDIyMC4xMzkgMCAwIDAgMjguNjM1IDIxMS41NzNsLS40NiAxLjUzMUEyODguNTM4IDI4OC41MzggMCAwIDAgMTYgMjk2LjA1OXY3OC44YTggOCAwIDAgMCAxMC4xMjcgNy43MTJMMzIgMzgwLjk1NHY3Ny43ODZhMzcuMjU4IDM3LjI1OCAwIDAgMCA1NSAzMi43Nmw2Mi4yNTktMzMuNzI5YTIxOS4yIDIxOS4yIDAgMCAxIDIxMi4yNTUgMS45Mmw1Mi4xNjcgMjkuNDc4YTM3LjMzOSAzNy4zMzkgMCAwIDAgNDguMTM4LTEwLjA2OWwyLjcyOS0zLjYzN0EzNy40NTUgMzcuNDU1IDAgMCAwIDQ3MiA0NTMuMTF2LTc0LjM2M2wxMy44NzMgMy44MjdBOCA4IDAgMCAwIDQ5NiAzNzQuODYydi03OC44YTI4OC41IDI4OC41IDAgMCAwLTEyLjE3Ni04Mi45NjJBMjE5Ljc3MyAyMTkuNzczIDAgMCAwIDMxOC41IDYxLjEwN1pNMjU1LjM5IDQwaDEuMjJhMjMuNDI0IDIzLjQyNCAwIDAgMSAyMS45MTcgMTUuMjM2IDIxOS41MTggMjE5LjUxOCAwIDAgMC0xMi41OS0uMzc0aC0yNi42NzZxLTIuODM4IDAtNS42NzUuMDc4QTIzLjQyNCAyMy40MjQgMCAwIDEgMjU1LjM5IDQwWm0tNzMuNyAzOS4xNThxNi41ODEtMS45MzYgMTMuMzM4LTMuNDQxYTIwNC4zMiAyMDQuMzIgMCAwIDEgNDQuMjMzLTQuODU1aDI2LjY3NmEyMDQuMzA4IDIwNC4zMDggMCAwIDEgNDIgNC4zNzNsNy4yNjIgMS41M2M1LjY1OSAxLjE5MSAxMS4yMjEgMi42NDEgMTYuNyA0LjI4NmwxOC44NjEgMjIuMzkyYTMyOS4wMzkgMzI5LjAzOSAwIDAgMSA3NS41NzYgMjQ2LjEwOWwtMTkuMDc2LTUuMjYyYTU2OC45ODEgNTY4Ljk4MSAwIDAgMC0zMDIuNTE5IDBsLTE5LjA4NCA1LjI2NGEzMjkuMSAzMjkuMSAwIDAgMSA3NS41ODItMjQ2LjExMVpNMzIgMzY0LjM1NnYtNjguM0EyNzIuNSAyNzIuNSAwIDAgMSA0My41IDIxNy43bC40NTktMS41MzFBMjA0LjEyOCAyMDQuMTI4IDAgMCAxIDE1MC43IDkxLjEyMWwtMS43IDIuMDE3YTM0NS4xIDM0NS4xIDAgMCAwLTc5LjI0NyAyNTguMTY3cS4xMzMgMS4yOTMuMjc1IDIuNTYxWm00MjQgODguNzU0YTIxLjM1NiAyMS4zNTYgMCAwIDEtNC4yNDkgMTIuNzQ5bC0yLjczMSAzLjY0MWEyMS4zIDIxLjMgMCAwIDEtMjcuNDY0IDUuNzQ1bC01Mi4xNjgtMjkuNDc5YTIzNS4xOTMgMjM1LjE5MyAwIDAgMC0yMjcuNzQ4LTIuMDZsLTYyLjI1NSAzMy43MjhhMjEuMjU4IDIxLjI1OCAwIDAgMS0yNS4xNTctMy42NjFBMjEuMTE4IDIxLjExOCAwIDAgMSA0OCA0NTguNzR2LTYuNDYyYTM3IDM3IDAgMCAwIDIxLjI3IDYuNjYyQTM3LjM4MiAzNy4zODIgMCAwIDAgODcgNDU0LjQ0NGw2Mi4yNi0zMy43M2EyMTkuMTcxIDIxOS4xNzEgMCAwIDEgMjEyLjI1NCAxLjkyMWw1Mi4xNjcgMjkuNDc4QTM3LjM2NiAzNy4zNjYgMCAwIDAgNDU2IDQ0OC4xODhabTAtMzcuMDZhMjEuMzYxIDIxLjM2MSAwIDAgMS00LjI0OSAxMi43NWwtMi43MyAzLjY0YTIxLjMgMjEuMyAwIDAgMS0yNy40NjUgNS43NDVsLTUyLjE2OC0yOS40NzlhMjM1LjE2NSAyMzUuMTY1IDAgMCAwLTIyNy43NDgtMi4wNmwtNjIuMjU1IDMzLjcyOGEyMS4yNTggMjEuMjU4IDAgMCAxLTI1LjE1Ny0zLjY2MUEyMS4xMTggMjEuMTE4IDAgMCAxIDQ4IDQyMS42OHYtNDUuMTRsNjEtMTYuODI2YTU1Mi45OSA1NTIuOTkgMCAwIDEgMjk0LjAwOSAwbDUzIDE0LjYxOVptMjQtNTEuNjk0LTM4LjAyNS0xMC40ODkuMTE4LTEuMDNhMzQ1LjEyMyAzNDUuMTIzIDAgMCAwLTc4Ljk0Ni0yNTkuNTJBMjAzLjc2IDIwMy43NiAwIDAgMSA0NjguNSAyMTcuN2EyNzIuNDk0IDI3Mi40OTQgMCAwIDEgMTEuNSA3OC4zNTlaIiBmaWxsPSIjMDAwMDAwIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4=" />
                    </button>
                    <div id="dropdown-content" className="dropdown-content">
                        <a href="hellogreen.html" className="nav-link">
                            <div className="gm-drop-circle">GM</div>
                        </a>
                        <a href="hellopurple.html" className="nav-link">
                            <div className="gn-drop-circle">GN</div>
                        </a>
                    </div>
                </nav>
                <div>
                    <ConnectButton
                        client={client}
                        wallets={wallets}
                        theme={"dark"}
                        connectModal={{ size: "wide" }}
                    />
                </div>
            </div>
        </header>
    );
}