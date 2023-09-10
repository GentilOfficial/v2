import React from "react";
import { Link } from "react-router-dom";
import { Button, Image } from "@nextui-org/react";
import NotFoundImage from "../assets/images/notFound.webp";

export default function NotFound(x) {
    return (
        <section className="flex flex-col items-center justify-center min-h-[calc(100vh-21rem)] sm:min-h-[calc(100vh-18rem)] text-center">
            <p className="text-sm font-medium text-primary mt-6">
                {x.isIT ? "Codice errore: 404" : "Error code: 404"}
            </p>
            <h1 className="mt-3 text-3xl font-semibold">
                {x.isIT ? "Pagina non trovata" : "Page not found"}
            </h1>
            <p className="mt-2 text-xl text-foreground-500 dark:text-foreground-400 font-caveat">
                {x.isIT
                    ? "Mi spiace, la pagina che stai cercando non esiste oppure è stata spostata."
                    : "Sorry, the page you are looking for doesn't exist or has been moved."}
            </p>
            <Button
                as={Link}
                to={x.isIT ? "/it/" : "/"}
                variant="bordered"
                color="primary"
                className="mx-auto mt-5 mb-10"
            >
                {x.isIT ? "Vai alla Home" : "Go Home"}
            </Button>
            <Image
                isBlurred
                width={300}
                className="mx-auto"
                alt="Error"
                src={NotFoundImage}
            />
        </section>
    );
}
