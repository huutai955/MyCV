import { Modal } from "antd"
import React, { useRef, useState } from "react";
import Image from "../components/image";

type Props = {}

export default function Project({ }: Props) {
    const [open, setOpen] = useState<boolean>(false);
    const [src, setSrc] = useState<string | null>('')

    const handleClickImg = (event: React.MouseEvent<HTMLImageElement, MouseEvent>, ref: any) => {
        if (ref.current) {
            console.log(ref.current.getAttribute('src'))
            setSrc(ref.current.getAttribute('src'))
        }
        setOpen(true)
    }
    return (
        <div className='bg-navy h-screen p-10 overflow-y-scroll'>
            <div className='container mx-auto'>
                <h1 className='font-semibold text-4xl text-center text-grey-custom mb-4'>UNIKCORE PROJECT</h1>
                <p className="text-xl text-white mb-3">This is the first real-world project I have ever worked on. It is a product created to manage sales, marketing, and customer care systems for various industries. I feel quite fortunate to have been involved in the project during the company's restructuring of the front-end of the product. Consequently, I have learned a lot from this project.
                    This is some information about this project.
                </p>
                <p className="text-white text-xl">A few libraries and frameworks that be used in this project:</p>
                <div className="flex gap-11 mb-3">
                    <ul className="text-white">
                        <li>NextJS</li>
                        <li>Redux (Redux-toolkit)</li>
                        <li>Tanstack Query</li>
                        <li>Antd</li>
                        <li>TailwindCSS</li>
                    </ul>
                    <ul className="text-white">
                        <li>SASS</li>
                        <li>Formik</li>
                        <li>Yup</li>
                        <li>DayJS</li>
                        <li>React ChartJS</li>
                        <li>React BeautifulDND</li>
                    </ul>
                </div>
                <p className="text-white text-xl">Due to some confidential information and the company's product has not been released to the market, I cannot disclose the source code. Therefore, I will describe some features I have implemented using images permitted by the company.</p>
                <div className="flex flex-col gap-4">
                    <p className="text-white">1.Create components for reusing in whole project.</p>
                    <p className="text-white">2.Create layout sidebar for app</p>
                    <p className="text-white">3.Handling login/logout and maintain login with access token, refresh token.</p>
                    <Image className="cursor-zoom-out" src="/img/pho1.jpg" width={1000} height={500} alt="" handleClickImg={handleClickImg} />
                    <p className="text-white">4.Create contact page and handle logic for this page.This page is used to store contact information, and you can save multiple tabs for different filters by added tab had created before. In this page, i handled params like filters, page, page size, search for request to server and save the result to url to can access result filters quickly. You can drag and drop to change position in your tabs view</p>
                    <Image className="cursor-zoom-out" src="/img/contact1.png" width={1000} height={500} alt="" handleClickImg={handleClickImg} />
                    <p className="text-white">5.Create segment builder page and handle logic for this page. This page is used to filter out customer segments based on the fields that the admin has filtered out. This page splits into two parts. The first tab includes some basic information and the second tab will be used to add fields to filter out the customer segments that the admin needs. </p>
                    <p className="text-white">When you click on add button on the right position on fields. It will be added into the active tab. The field be added will create some information like field name, operator and input. The input will be specified according to the operator and the type of input that has been specified previously. For example, an input of type "date" will be rendered as an input with a date picker, but when the operator is changed, that input will switch to a range picker. As for inputs that require text entry, they may have different validations depending on the type. For instance, phone numbers or emails will have their own specific format validation. The fields can also be left blank or required, depending on the previously selected operator.
                        As for input type "text" but having the data that has been specified previously its ouput is a input with some selection.
                        When all information is valid you can preview it and save it.</p>
                    <div className="flex flex-col gap-3">
                        <Image className="cursor-zoom-out" src="/img/segment1.jpg" width={1000} height={500} alt="" handleClickImg={handleClickImg} />
                        <Image className="cursor-zoom-out" src="/img/segment2.jpg" width={1000} height={500} alt="" handleClickImg={handleClickImg} />
                    </div>
                    <p className="text-white">6.Create contact information detail.This page is used to display the complete information of a customer through their contact information and shopping details.</p>
                    <Image className="cursor-zoom-out" src="/img/contactinfor.jpg" width={1000} height={500} alt="" handleClickImg={handleClickImg} />
                    <p className="text-white">7.Create form and validate for account page.This page is used to display, update account information .</p>
                    <Image className="cursor-zoom-out" src="/img/account.jpg" width={1000} height={500} alt="" handleClickImg={handleClickImg} />
                    <p className="text-white">8.From October 2023 to the present, restructure the pages that were not performing well before and add some new features to the app.</p>
                    <Image className="cursor-zoom-out" src="/img/refactor1.jpg" width={1000} height={500} alt="" handleClickImg={handleClickImg} />
                    <Image className="cursor-zoom-out" src="/img/refactor2.jpg" width={1000} height={500} alt="" handleClickImg={handleClickImg} />
                    <Image className="cursor-zoom-out" src="/img/refactor3.jpg" width={1000} height={500} alt="" handleClickImg={handleClickImg} />

                </div>
            </div>
            <Modal
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                footer={false}
                width={'80%'}
                // style={{padding: 0}}
                rootClassName="show-image-modal-customize"
            >
                <img src={src ? src : ''} className="w-full" alt="" />
            </Modal>
        </div>
    )
}