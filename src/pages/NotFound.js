import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

export default function NotFound({ isIT }) {
    return (
        <section className="flex flex-col items-center justify-center text-center">
            <p className="text-xl font-medium text-primary mt-6">
                {isIT ? "Codice errore: 404" : "Error code: 404"}
            </p>
            <h1 className="mt-3 text-4xl font-semibold">
                {isIT ? "Pagina non trovata" : "Page not found"}
            </h1>
            <p className="mt-2 text-xl text-foreground-500 dark:text-foreground-400 font-caveat">
                {isIT
                    ? "Mi spiace, la pagina che stai cercando non esiste oppure è stata spostata."
                    : "Sorry, the page you are looking for doesn't exist or has been moved."}
            </p>
            <Button
                as={Link}
                to={isIT ? "/it/" : "/"}
                variant="bordered"
                color="primary"
                className="mx-auto mt-5 mb-10"
            >
                {isIT ? "Vai alla Home" : "Go Home"}
            </Button>
        </section>
    );
}
