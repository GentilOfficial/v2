import React from "react";
import { Link } from "react-router-dom";
import { Button, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import Chilling from "../assets/images/chilling.png";

export default function NotFound(x) {
    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center py-16 mx-auto">
                <div className="flex flex-col items-center justify-center text-center">
                    <p className="text-sm font-medium text-primary">
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

                    <div className="flex items-center mt-4 gap-x-3">
                        <Link to={x.isIT ? "/it/" : "/"}>
                            <Button variant="bordered" color="primary">
                                {x.isIT ? "Vai alla Home" : "Go Home"}
                            </Button>
                        </Link>
                    </div>
                    <motion.div
                        className="flex justify-center"
                        animate={{
                            y: [10, -10],
                        }}
                        transition={{
                            duration: 5,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    >
                        <Image
                            isBlurred
                            width={300}
                            className="mx-auto"
                            alt="Error me image"
                            src={Chilling}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
