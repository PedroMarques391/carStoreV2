"use client"
import { usePathname } from "next/navigation";
import Container from "../Container/Container";
import { IconFacebook, IconInstagram, IconX } from "../Utils/Icons";
import Links from "../Utils/Link";
import Logo from "../Utils/Logo";

const Footer = () => {
    const pathName = usePathname();
    const hidden = pathName === "/login" || pathName === "/notFound";
    return (
        <footer className={`${hidden ? "hidden" : "block"} bg-black text-white py-10 mt-10`}>
            <Container>
                <main className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="flex flex-col gap-y-2">
                        <h2 className="text-xl font-bold mb-4 text-red-600 text-center">Contato</h2>
                        <p>Endereço: Av. Presidente Vargas, 1000, Centro</p>
                        <p>Belém - PA, 66017-000</p>
                        <p>Telefone: (91) 1234-5678</p>
                        <p>Email: contato@carstore.com.br</p>
                        <p>Horário de Funcionamento: Seg-Sex 9:00 - 18:00</p>
                    </div>

                    <div className="flex flex-col gap-y-2">
                        <h2 className="text-lg font-bold mb-4 text-center text-red-600">Navegação</h2>
                        <div className="grid grid-cols-2">
                            <div>
                                <h1 className=" text-lg font-bold mb-3">Comprar</h1>
                                <ul className="flex flex-col gap-2">
                                    <Links href="/garage/category/sedan" animation={false} className="hover:underline">Sedans</Links>
                                    <Links href="/garage/category/hatch" animation={false} className="hover:underline">Hatchs</Links>
                                    <Links href="/garage/category/suv" animation={false} className="hover:underline">SUVs</Links>
                                    <Links href="/garage/category/picape" animation={false} className="hover:underline">Picaps</Links>
                                </ul>
                            </div>
                            <div>
                                <h1 className=" text-lg font-bold mb-3">informações</h1>
                                <ul className="flex flex-col gap-2">
                                    <Links href="/info/about" animation={false} className="hover:underline">Sobre Nós</Links>
                                    <Links href="/info/lgpd" animation={false} className="hover:underline">LGPD</Links>
                                    <Links href="/info/terms" animation={false} className="hover:underline">Termos e Condições</Links>
                                    <Links href="/info/privacy" animation={false} className="hover:underline">Política de Privacidade</Links>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-2">
                        <h2 className="text-lg font-bold mb-4 text-center text-red-600">Siga-nos</h2>
                        <ul className="flex justify-around mx-10">
                            <Links
                                target="_blank"
                                animation={false}
                                href="https://facebook.com">{IconFacebook}</Links>
                            <Links
                                target="_blank"
                                animation={false}
                                href="https://instagram.com">{IconInstagram}</Links>
                            <Links
                                target="_blank"
                                animation={false}
                                href="https://x.com">{IconX}</Links>
                        </ul>
                    </div>
                </main>

                <div className="w-full text-center mt-10">
                    <Logo />
                </div>

                <div className="w-full mt-8 text-center">
                    <p>&copy; 2024 <span className="text-red-600">car</span>Store. Todos os direitos reservados.</p>
                </div>

            </Container>
        </footer>
    );
}

export default Footer;
