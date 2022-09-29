// import type { NextPage } from 'next' 

const homePage = () => {
    return (
        <>
            <div className="headerHomePage ">
                <div className="container">
                    <div className="text-end">
                        <a className="hover:text-blue-800   m-3" href="#">Home</a>
                        <a className="hover:text-blue-800   m-3" href="#">Menu</a>
                        <a className="hover:text-blue-800   m-3" href="#">Blog</a>
                        <a className="hover:text-blue-800   m-3" href="#">About Us</a>
                    </div>
                </div>
                <div className="centered text-center">
                    <span className="text-3xl">
                        Web Development
                    </span>
                    <p className="font-extralight pt-2 pb-2">
                        Lorem Ipsum is si mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                    </p>
                    <button className="bt-start">GET START</button>
                </div>
            </div>
            <div className="wellcome mt-3 text-center ">
                <span className="text-3xl ">
                    WELLCOME TO WEBSITE
                </span>
                <p className="text-center font-extralight pt-2 pb-2 ">
                    There are many variations of passages of Lorem Ipsum available
                </p>
            </div>
            <div className="grid gap-4 grid-cols-4 justify-items-center pb-8 w-full px-5">
                <div className="block block1 bg-cover bg-center text-center p-3 rounded-lg "></div>
                <div className="block block2 bg-cover bg-center text-center p-3 rounded-lg"></div>
                <div className="block block3 bg-cover bg-center text-center p-3 rounded-lg"></div>
                <div className="block block4 bg-cover bg-center text-center p-3 rounded-lg"></div>
                <div className="block block5 bg-cover bg-center text-center p-3 rounded-lg"></div>
                <div className="block block6 bg-cover bg-center text-center p-3 rounded-lg"></div>
                <div className="block block7 bg-cover bg-center text-center p-3 rounded-lg"></div>
                <div className="block block8 bg-cover bg-center text-center p-3 rounded-lg"></div>


            </div>

            <div className="our servise mt-8 text-center ">
                <span className="text-3xl">
                    MENU
                </span>
            </div>
            <div className="grid gap-4 grid-cols-5 justify-items-center pb-10 pt-8">
                <div className="text-center p-3 rounded-lg grid-block">Espresso</div>
                <div className="text-center p-3 rounded-lg grid-block">Americano</div>
                <div className="text-center p-3 rounded-lg grid-block">Latte</div>
                <div className="text-center p-3 rounded-lg grid-block">Cappuccino</div>
                <div className="text-center p-3 rounded-lg grid-block">Mocca</div>
                <div className="text-center p-3 rounded-lg grid-block">Macchiato</div>
                <div className="text-center p-3 rounded-lg grid-block">Milk Tea</div>
                <div className="text-center p-3 rounded-lg grid-block">Fruit Tea</div>
                <div className="text-center p-3 rounded-lg grid-block">Matcha</div>
                <div className="text-center p-3 rounded-lg grid-block">Lava Tea</div>

            </div>
            <div className="footer p-5">
                <div className="w-full">
                    <div className="grid grid-cols-3">
                        <div></div>
                        <div className="col-span-2">
                            <div className="text-left pb-1">
                                <label className="text-xl underline underline-offset-8">Sawanya Rattanabunno</label>
                            </div>
                            <div className="font-light">
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line-footer text-center ">
                <label className="text-white text-xs inline-block align-text-top">SPY S'R 2022</label>
            </div>
        </>
    )
}
export default homePage