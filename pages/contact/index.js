import { useState, useMemo } from "react";
import { useRouter } from "next/router";
import { Input, Textarea, Button } from "@nextui-org/react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiSolidMessageCheck, BiSolidMessageError } from "react-icons/bi";
import SEO from "@/components/SEO";
import ContactImage from "@/images/ContactImage";
import { translate } from "@/data/site.config";

export default function ContactPage() {
    const { locale } = useRouter();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [messageWasSent, setMessageWasSent] = useState(false);
    const [isSubmitted, setSubmitted] = useState(false);

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
                    clearFields();
                } else setMessageWasSent(false);
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

    const {
        title,
        description,
        formTitle,
        inputs,
        submit,
        wasSent,
        wasNotSent,
        cancel,
    } = translate.contact[locale];

    return (
        <>
            <SEO title={title} description={description} />
            <section
                className={`flex flex-col md:flex-row h-full items-center justify-start md:justify-center`}
            >
                <ContactImage className="text-primary w-1/2" />
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col w-full md:w-1/2 max-w-screen-sm gap-2 my-6"
                >
                    <h1 className="uppercase font-bold text-2xl text-center md:text-start">
                        {formTitle}
                    </h1>
                    <div className="flex gap-2">
                        <Input
                            isRequired
                            variant="faded"
                            label={inputs.firstName.label}
                            placeholder={inputs.firstName.placeholder}
                            value={firstName}
                            onValueChange={setFirstName}
                        />
                        <Input
                            isRequired
                            variant="faded"
                            label={inputs.lastName.label}
                            placeholder={inputs.lastName.placeholder}
                            value={lastName}
                            onValueChange={setLastName}
                        />
                    </div>
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
                    <div className="mx-auto flex gap-3">
                        <Button
                            type="submit"
                            color={
                                isSubmitted
                                    ? messageWasSent
                                        ? "primary"
                                        : "danger"
                                    : "primary"
                            }
                            className="w-36"
                            endContent={
                                isSubmitted ? (
                                    messageWasSent ? (
                                        <BiSolidMessageCheck />
                                    ) : (
                                        <BiSolidMessageError />
                                    )
                                ) : null
                            }
                        >
                            {isSubmitted
                                ? messageWasSent
                                    ? wasSent
                                    : wasNotSent
                                : submit}
                        </Button>
                        <Button
                            variant="light"
                            endContent={<AiFillCloseCircle />}
                            onPress={clearFields}
                        >
                            {cancel}
                        </Button>
                    </div>
                </form>
            </section>
        </>
    );
}
