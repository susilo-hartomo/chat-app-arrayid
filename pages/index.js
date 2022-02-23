import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightCircle, Download, Facebook, Instagram, Twitter, User } from 'react-feather'

// images 
import logo from '../assets/images/chat_logo.svg'
import partnerLogo from '../assets/images/partner_logo.png'
const partnerLogo = import('../assets/images/partner_logo.png')
import imgMastheat from '../assets/images/img_masthead.png'
import card1 from '../assets/images/card_1.png'
import card2 from '../assets/images/card_2.png'
import card3 from '../assets/images/card_3.png'
import chatTech from '../assets/images/tech_chat.svg'
import emot1 from '../assets/images/emot_1.svg'
import emot2 from '../assets/images/emot_2.svg'
import emot3 from '../assets/images/emot_3.svg'
import iosStore from '../assets/images/ios_store.png'
import androidStore from '../assets/images/android_store.png'
import chat1 from '../assets/images/chat_1.png'
import chat2 from '../assets/images/chat_2.png'
import chat3 from '../assets/images/chat_3.png'

// components
import Button from '../components/button'
import DataShow from '../components/dataShow'
import Card from '../components/card'
import Collase from '../components/collase'
import { useEffect, useLayoutEffect, useState } from 'react'
import Head from 'next/head'

export default function Home() {

  const [scrollPosition, setPosition] = useState(0);

  useEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, [scrollPosition]);

  return (
    <>
      <Head>
        <title>Chan,N Rechat</title>
        <meta name="description" content="Chan,N Rechat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={' mt-4 sticky top-0 z-50' + (scrollPosition > 20 ? " bg-[#F4F7FF] drop-shadow-primary-shadow" : "")}>
        <div className="container mx-auto w-full h-24  items-center flex justify-between">
          <div id="logo">
            <Image src={logo} alt="logo" />
          </div>
          <nav>
            <Link href="#masthead"><a className="px-8 text-gray-900 font-medium">Beranda</a></Link>
            <Link href="#fitur-fitur"><a className="px-8 text-gray-500">Fitur</a></Link>
            <Link href="#teknologi"><a className="px-8 text-gray-500">Teknologi</a></Link>
            <Link href="#faq"><a className="px-8 text-gray-500">FAQ</a></Link>
          </nav>
          <div id="action">
            <Button type='primary' text='Download' />
          </div>
        </div>
      </header>

      <main className="">
        <section id='masthead' className='py-24 pt-16'>
          <div className='container mx-auto flex gap-3 justify-between items-center'>
            <div className=' flex-1'>
              <p className='text-primary mb-5'>CHAT N’ RECHAT</p>
              <h2 className=' text-4xl mb-5'>Sebuah aplikasi chatting yang bisa bikin kamu lupa diri, tapi tidak lupa jasa pahlawan!</h2>
              <h6 className='text-2xl font-light text-dark-light leading-8'>Sebenernya banyak banget aplikasi chatting yang lebih bagus dari ini, maka dari itu lebih baik pake yang lain aja deh ya daripada pake aplikasi yang ini.</h6>
              <div className='flex gap-6 mt-8'>
                <Button size='large' type='primary' text='Register' onclick={() => { }}><ArrowRightCircle /></Button>
                <Button size='large' type='secondary' text='Learn More' />
              </div>
              <div className='flex gap-12 pt-16'>
                <DataShow title='total download' total='1,501,234'><Download className='text-dark-light' /></DataShow>
                <div className='h-11 w-[1px] opacity-[0.1] bg-dark-light'></div>
                <DataShow title='total users' total='1,318,829' ><User className='text-dark-light' /></DataShow>
              </div>
            </div>
            <div className='flex-1'>
              <Image src={imgMastheat} alt='Masthead Chat' />
            </div>
          </div>
          <div className='container mx-auto p-16 mt-16 bg-primary-light'>
            <div className='relative w-full h-10'>
              <Image src={partnerLogo} layout='fill' alt="partner-logo" />
            </div>
          </div>
        </section>

        <section id='fitur-fitur' className='py-24'>
          <div className=' container mx-auto'>
            <div className=' text-center'>
              <p className=' uppercase text-xs text-dark'>NGGAK HARUS SIH SEBENERNYA</p>
              <h3 className=' text-3xl mt-4 mb-3'>Kenapa Harus Pakai Chat N’ Rechat?</h3>
              <p className=' w-[495px] font-light text-dark-light mx-auto leading-8'>Sebenernya yang bagus itu sih WhatsApp loh, mending pake WhatsApp aja deh. Yaudah berikut ini adalah fitur-fitur WhatsApp.</p>
            </div>
            <div className='mt-24 flex gap-8'>
              <Card img={card1} title='Groups to keep in touch' desc='Keep in touch with the groups of people that matter the most, like your family or coworkers. With group chats, you can share messages, photos, and videos.' />
              <Card img={card2} title='Simple, Reliable Messaging' desc="Message your friends and family for free*. WhatsApp uses your phone' s Internet connection to send messages so you can avoid SMS fees." />
              <Card img={card3} title='Speak Freely' desc="With voice calls, you can talk to your friends and family for free*, even if they're in another country. And with free* video calls, you can have face-to-face conversations." />
            </div>
          </div>

        </section>

        <section id='teknologi' className='py-24'>
          <div className="container mx-auto flex justify-between">
            <div className='flex-1 justify-center text-center'>
              <Image src={chatTech} alt='technology chat' />
            </div>
            <div className='flex-1 max-w-[497px]'>
              <p className=' uppercase text-xs text-dark'>TEKNOLOGI YANG DIGUNAKAN</p>
              <h3 className='text-3xl mt-4 mb-3'>Teknologi Yang Kami Gunakan Di Dalam Aplikasi Ini Akan Membuat DHH Dan Jason Fried Pensiun! 😱</h3>
              <p className=' w-[495px] font-light text-dark-light leading-8'>Lo bisa bayangin DHH sama Jason Fried aja jadi pensiun gegara aplikasi ini, apalagi lo yang cuma user dan beban kami, gegara lo pake dan daftar di aplikasi ini jadi kita harus bayar server DO tiap bulan, mana pas bayar harus tunjuk-tunjukan. Inilah alasan kenapa gak usah daftar:</p>
              <div className="mt-[40px]">
                <div className="flex gap-8 justify-start mb-[30px]">
                  <div className="min-w-[60px] p-4 max-h-[60px] min-h-[60px] rounded-lg bg-slate-200" >
                    <Image className='' src={emot1} alt="emoticon" />
                  </div>
                  <div className=''>
                    <h3 className='font-medium text-md mb-[10px]'>Kamu Adalah Beban Kami</h3>
                    <p className='text-dark-light font-light leading-7'>Semakin banyak kamu yang mendaftar di aplikasi ini, artinya semakin banyak data yang perlu disimpan, nah kan jadi perlu server gede tuh. Makanya kamu beban!</p>
                  </div>
                </div>
                <div className="flex gap-8 justify-start mb-[30px]">
                  <div className="min-w-[60px] p-4 max-h-[60px] min-h-[60px] rounded-lg bg-slate-200" >
                    <Image src={emot2} alt="emoticon" />
                  </div>
                  <div className=''>
                    <h3 className='font-medium text-md mb-[10px]'>Males Buat Ngembangin</h3>
                    <p className='text-dark-light font-light leading-7'>Lo bakal nemu bug, entah pesan yang mau dikirim gak bisa dikirim padahal lo belom pencet tombol enter atau masalah lainnya. Nah soal itu kita males buat benerin.</p>
                  </div>
                </div>
                <div className="flex gap-8 justify-start mb-[30px]">
                  <div className="min-w-[60px] p-4 max-h-[60px] min-h-[60px] rounded-lg bg-slate-200" >
                    <Image src={emot3} alt="emoticon" />
                  </div>
                  <div className=''>
                    <h3 className='font-medium text-md mb-[10px]'>Pokoknya Males Aja Lah</h3>
                    <p className='text-dark-light font-light leading-7'>Nggak tau lagi harus ngomong apa, pokoknya males aja sih kita bikin aplikasi chat kek gini. Makannya mending lo pake WhatsApp aja udah.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='download' className='py-24'>
          <div className="container mx-auto rounded-3xl bg-primary flex">
            <div className="flex-1 p-20">
              <div className='text-white'>
                <p className=' uppercase text-xs '>DOWNLOAD APLIKASINYA</p>
                <h3 className=' text-3xl mt-4 mb-3 w-[420px] leading-[42px] font-normal'>Download Aplikasi Chat n’ Rechat Di Play Store, App Store, atau Symbian Store</h3>
                <ul className=' list-disc pl-4'>
                  <li className=' leading-[26px] font-light text-xs opacity-60'>Android Version: Mojave+</li>
                  <li className=' leading-[26px] font-light text-xs opacity-60'>iOS Version: Lolipop+</li>
                  <li className=' leading-[26px] font-light text-xs opacity-60'>Symbian: 20.04+</li>
                </ul>
              </div>
              <div className="flex-1 flex mt-10 mb-2 gap-4">
                <Image src={iosStore} alt='ios store' />
                <Image src={androidStore} alt='andorid store' />
              </div>
            </div>
            <div className="flex-1 mx-auto">
              <div className='pt-16 px-4 w-[400px] h-full bg-white'>
                <Image src={chat1} alt='chat image' />
                <div className="my-6 text-right">
                  <Image src={chat2} alt='chat image' />
                </div>
                <Image src={chat3} alt='chat image' />
              </div>
            </div>
          </div>
        </section>
        <section id='faq' className='mt-20'>
          <div className="comtainer">
            <div className=' text-center mb-[52px]'>
              <p className=' uppercase text-xs text-dark'>BANYAK YANG NANYA</p>
              <h3 className=' text-3xl mt-4 mb-3'>Pertanyaan Yang Sering Ditanyain</h3>
              <p className=' font-light text-dark-light mx-auto leading-8'>Sebenernya pertanyaan-pertanyaan ini kagak ada yang nanya sih, tapi ya <br /> ditaruh sini aja siapa tau lo mau baca ‘kan.</p>
            </div>
            <div className='mx-auto w-[673px]'>
              <Collase title='Apakah aplikasi ini sudah dapat izin dari MUI?' desc='' />
              <Collase isOpen={true} title='Apakah aplikasi ini gratis?' desc='Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah.' />
              <Collase title='Apakah data saya akan dijual ke agen khusus US?' desc='' />
              <Collase title='Kenapa bumi muter? Apa karena di depan ada yang nikah?' desc='' />
              <Collase title='Gimana caranya supaya si Rizal mau bikin konten buat Array ID?' desc='' />
              <Collase title='Pertanyaan di atas gabakal ada yang bisa jawab sih' desc='' />
              <Collase title='Kenapa game epep burik, bang?' desc='' />
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-16">
        <div className="container mx-auto p-16 flex gap-8 justify-between bg-primary-light">
          <div className="max-w-[432px]">
            <div className="flex items-center gap-4 mb-6">
              <Image src={logo} width={30} height={30} alt="chat app" />
              <h4 className=' text-dark font-medium text-lg'>Chat N’ Rechat</h4>
            </div>
            <p className=' text-dark-light font-light text-sm leading-6'>Sebenernya banyak banget aplikasi chatting yang lebih bagus dari ini, maka dari itu lebih baik pake yang lain aja deh ya daripada pake aplikasi yang ini.</p>
            <p className=' uppercase text-dark font-light text-sm mt-4'>COPYRIGHT (C) 2021. DESIGN BY NAUVAL</p>
          </div>
          <div className=" w-40">
            <h4>Sitemap</h4>
            <ul className='mt-2'>
              <li className=' mb-2'> <a className=' text-dark-light font-light text-sm' href="#beranda">Beranda</a> </li>
              <li className=' mb-2'> <a className=' text-dark-light font-light text-sm' href="#fitur-fitur">Fitur fitur</a>  </li>
              <li className=' mb-2'> <a className=' text-dark-light font-light text-sm' href="#teknologi">Teknologi</a> </li>
              <li className=' mb-2'> <a className=' text-dark-light font-light text-sm' href="#faq">FAQ</a> </li>
              <li className=' mb-2'> <a className=' text-dark-light font-light text-sm' href="#download">Download</a> </li>
            </ul>
          </div>
          <div className="w-[186px]">
            <h4>Tetap Tehubung</h4>
            <p className=' text-dark-light font-light text-sm my-4'>Lihat kami pansos disosial media berukut: </p>
            <div className="flex gap-4">
              <div className="w-[40px] p-2 h-[40px] rounded-lg bg-slate-200" >
                <Facebook color='#0C1B4D' />
              </div>
              <div className="w-[40px] p-2  h-[40px] rounded-lg bg-slate-200" >
                <Twitter color='#0C1B4D' />
              </div>
              <div className="w-[40px] p-2 h-[40px] rounded-lg bg-slate-200" >
                <Instagram color='#0C1B4D' />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
