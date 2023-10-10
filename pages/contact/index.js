import { Caveat } from "next/font/google";
import { useState, useMemo } from "react";
import { useRouter } from "next/router";
import { motion, useAnimate } from "framer-motion";
import { Input, Textarea, Button } from "@nextui-org/react";
import { AiFillCloseCircle } from "react-icons/ai";
import {
    BiSolidSend,
    BiSolidMessageCheck,
    BiSolidMessageError,
} from "react-icons/bi";
import confetti from "canvas-confetti";
import SEO from "@/components/SEO";
import ContactImageSVG from "@/images/ContactImageSVG";
import { translate } from "@/data/site.config";

const caveat = Caveat({ subsets: ["latin"] });

export default function ContactPage() {
    const { locale } = useRouter();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [messageWasSent, setMessageWasSent] = useState(false);
    const [isSubmitted, setSubmitted] = useState(false);

    const [submitButton, animateButton] = useAnimate();

    const startConfetti = () => {
        const el = submitButton.current.getBoundingClientRect();

        confetti({
            particleCount: 100,
            startVelocity: 40,
            angle: 90,
            spread: 50,
            origin: {
                x: (el.left + el.width / 2) / window.innerWidth,
                y: (el.top + el.height / 2) / window.innerHeight,
            },
        });
    };

    const startShaking = () => {
        animateButton(
            submitButton.current,
            {
                x: [-20, 20, -20, 20, -20, 0],
            },
            { duration: 0.3 }
        );
    };

    const clearFields = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
    };

    const validateEmail = (email) =>
        email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

    const isEmailInvalid = useMemo(() => {
        if (email === "") return false;
        return validateEmail(email) ? false : true;
    }, [email]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            message: message,
        };

        if (!isEmailInvalid) {
            try {
                const res = await fetch("/api/send", {
                    method: "POST",
                    body: JSON.stringify(data),
                });
                if (res.ok) {
                    setMessageWasSent(true);
                    startConfetti();
                    clearFields();
                } else {
                    startShaking();
                    setMessageWasSent(false);
                }
            } catch (error) {
                setMessageWasSent(false);
                console.error("Error sending message:", error);
            }
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
            }, 2000);
        }
    };

    const formContainer = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const formChild = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    const {
        title,
        description,
        formTitle,
        inputs,
        send,
        wasSent,
        wasNotSent,
        cancel,
    } = translate.contact[locale];

    return (
        <>
            <SEO title={title} description={description} />
            <section className="flex h-full flex-col items-center justify-center text-center mb-20">
                <h1
                    className={`text-6xl text-primary font-bold ${caveat.className}`}
                >
                    {title}
                </h1>
                <div className="flex flex-col md:flex-row h-full w-full items-center justify-start md:justify-center mt-12 md:mt-0">
                    <div className="w-2/5 md:w-1/2 mx-auto">
                        <ContactImageSVG className="text-primary" />
                    </div>
                    <motion.form
                        onSubmit={handleSubmit}
                        variants={formContainer}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-2 max-w-screen-sm gap-2 my-6 w-full md:w-1/2"
                    >
                        <motion.h2
                            variants={formChild}
                            className="uppercase font-bold text-2xl text-center md:text-start col-span-2"
                        >
                            {formTitle}
                        </motion.h2>
                        <motion.div variants={formChild}>
                            <Input
                                isRequired
                                variant="faded"
                                label={inputs.firstName.label}
                                placeholder={inputs.firstName.placeholder}
                                value={firstName}
                                onValueChange={setFirstName}
                            />
                        </motion.div>
                        <motion.div variants={formChild}>
                            <Input
                                isRequired
                                variant="faded"
                                label={inputs.lastName.label}
                                placeholder={inputs.lastName.placeholder}
                                value={lastName}
                                onValueChange={setLastName}
                            />
                        </motion.div>
                        <motion.div variants={formChild} className="col-span-2">
                            <Input
                                isRequired
                                variant="faded"
                                type="email"
                                label={inputs.email.label}
                                placeholder={inputs.email.placeholder}
                                value={email}
                                onValueChange={setEmail}
                                color={isEmailInvalid ? "danger" : "foreground"}
                                errorMessage={
                                    isEmailInvalid && inputs.email.errorMessage
                                }
                                isInvalid={isEmailInvalid}
                            />
                        </motion.div>
                        <motion.div variants={formChild} className="col-span-2">
                            <Textarea
                                isRequired
                                variant="faded"
                                label={inputs.message.label}
                                placeholder={inputs.message.placeholder}
                                minRows={5}
                                maxRows={5}
                                value={message}
                                onValueChange={setMessage}
                            />
                        </motion.div>

                        <motion.div
                            variants={formChild}
                            className="mx-auto w-full flex items-center justify-between gap-3 col-span-2"
                        >
                            <Button
                                variant="light"
                                size="sm"
                                endContent={<AiFillCloseCircle />}
                                onPress={clearFields}
                            >
                                {cancel}
                            </Button>
                            <Button
                                ref={submitButton}
                                type="submit"
                                color={
                                    isSubmitted
                                        ? messageWasSent
                                            ? "secondary"
                                            : "danger"
                                        : "primary"
                                }
                                endContent={
                                    isSubmitted ? (
                                        messageWasSent ? (
                                            <BiSolidMessageCheck />
                                        ) : (
                                            <BiSolidMessageError />
                                        )
                                    ) : (
                                        <BiSolidSend />
                                    )
                                }
                                className="w-28"
                            >
                                {isSubmitted
                                    ? messageWasSent
                                        ? wasSent
                                        : wasNotSent
                                    : send}
                            </Button>
                        </motion.div>
                    </motion.form>
                </div>
            </section>
        </>
    );
}
