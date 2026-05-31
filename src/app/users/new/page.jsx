"use client";

import {
    Button,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";

import {
    CirclePlus,
    PersonPlus,
    Pencil,
    Envelope,
} from "@gravity-ui/icons";

const AddNewUser = () => {

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const newUsers = Object.fromEntries(formData.entries());

        console.log(newUsers, "New users");

        try {
            const res = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUsers),
            });

            const data = await res.json();

            console.log(data, "Created User");

            if (data.success) {
                alert("User added successfully!");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className="relative min-h-screen overflow-hidden bg-[#070B14] px-4 py-16 flex items-center justify-center">

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
                <div className="absolute bottom-0 right-0 w-125 h-125 bg-sky-500/10 blur-3xl rounded-full animate-pulse" />
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]" />

            <div className="relative z-10 w-full max-w-2xl">
                <div className="rounded-[36px] border border-white/10 bg-white/4 backdrop-blur-3xl shadow-[0_0_80px_rgba(59,130,246,0.08)] overflow-hidden">

                    <div className="h-1 bg-linear-to-r from-blue-500 via-sky-500 to-cyan-400" />

                    <div className="p-8 md:p-12">

                        <div className="flex flex-col items-center text-center">

                            <div className="relative w-24 h-24 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.4)]">
                                <div className="absolute inset-0 rounded-full bg-white/20 blur-xl" />
                                <PersonPlus width={38} height={38} className="text-white relative z-10" />
                            </div>

                            <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-xs font-bold tracking-wide uppercase">
                                <CirclePlus width={14} height={14} />
                                Control Panel
                            </div>

                            <h1 className="mt-4 text-4xl font-black text-white tracking-tight">
                                Add New User
                            </h1>

                            <p className="mt-2.5 text-slate-400 text-sm max-w-sm leading-relaxed">
                                Provision a new platform workspace account and configure system access parameters securely.
                            </p>
                        </div>

                        <Form className="mt-10"
                            onSubmit={onSubmit}>
                            <Fieldset className="w-full border-none p-0 m-0">
                                <FieldGroup className="space-y-5">

                                    <TextField
                                        isRequired
                                        name="name"
                                        className="flex flex-col gap-2 w-full group"
                                        validate={(value) => {
                                            if (value.length < 3) {
                                                return "Name must be at least 3 characters";
                                            }
                                            return null;
                                        }}
                                    >
                                        <Label className="text-xs font-bold text-gray-400 ml-1 tracking-wide uppercase group-focus-within:text-blue-400 transition-colors">
                                            Full Name
                                        </Label>

                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors">
                                                <Pencil width={16} height={16} />
                                            </div>

                                            <Input
                                                placeholder="John Doe"
                                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/10 bg-white/3 text-white 
                                                placeholder:text-gray-600 backdrop-blur-xl transition-all duration-300
                                                focus:border-blue-500/50 focus:bg-white/[0.07] focus:ring-4 focus:ring-blue-500/10 outline-none"
                                            />
                                        </div>

                                        <FieldError className="text-xs font-semibold text-red-400 mt-1 ml-1" />
                                    </TextField>

                                    <TextField
                                        isRequired
                                        name="email"
                                        type="email"
                                        className="flex flex-col gap-2 w-full group"
                                    >
                                        <Label className="text-xs font-bold text-gray-400 ml-1 tracking-wide uppercase group-focus-within:text-blue-400 transition-colors">
                                            Email Address
                                        </Label>

                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors">
                                                <Envelope width={16} height={16} />
                                            </div>

                                            <Input
                                                placeholder="john@example.com"
                                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/10 bg-white/3 text-white 
                                                placeholder:text-gray-600 backdrop-blur-xl transition-all duration-300
                                                focus:border-blue-500/50 focus:bg-white/[0.07] focus:ring-4 focus:ring-blue-500/10 outline-none"
                                            />
                                        </div>

                                        <FieldError className="text-xs font-semibold text-red-400 mt-1 ml-1" />
                                    </TextField>

                                </FieldGroup>

                                <div className="mt-10 flex flex-col sm:flex-row gap-4">

                                    <Button
                                        type="submit"
                                        className="flex-1 h-14 overflow-hidden rounded-2xl bg-linear-to-r from-blue-600 via-sky-500 to-cyan-500 text-white font-bold text-base tracking-wide shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(14,165,233,0.35)] group/btn"
                                    >
                                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_infinite]" />
                                        <div className="relative flex items-center justify-center gap-3">
                                            <CirclePlus width={18} height={18} />
                                            <span>Save User Information</span>
                                        </div>
                                    </Button>

                                    <Button
                                        type="reset"
                                        variant="bordered"
                                        className="sm:w-44 h-14 rounded-2xl border border-white/10 bg-white/2 text-slate-300 font-semibold hover:bg-white/6 hover:text-white transition-all duration-300"
                                    >
                                        Reset Form
                                    </Button>

                                </div>
                            </Fieldset>
                        </Form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddNewUser;