
import React, { useState } from 'react'; 
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { Button } from 'primereact/button';
import '@/styles/font-end/main.css';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import { useRouter } from 'next/navigation';

export default function nailsandspa() {

  const [username, setUsername] = useState<string | null>(null);
    const items: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            url: '/'
        },
        {
            label: 'Employeers',
            icon: 'pi pi-star',
            items: [
                {
                    label: 'Employeer - 1',
                    icon: 'pi pi-bolt'
                },
                {
                    label: 'Employeer - 2',
                    icon: 'pi pi-server'
                },
                {
                    label: 'Employeer - 3',
                    icon: 'pi pi-pencil'
                },
            ]
        },
        {
            label: 'Services',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'MANICURE',
                    icon: 'pi pi-bolt',
                    url: '/services-and-prices'
                },
                {
                    label: 'PEDICURE',
                    icon: 'pi pi-bolt',
                    url: '/services-and-prices'
                },
                {
                    label: 'CUSTOM NAIL ART',
                    icon: 'pi pi-bolt',
                    url: '/services-and-pricesp'
                },
                {
                    label: 'WAXING',
                    icon: 'pi pi-bolt',
                    url: '/services-and-pricesp'
                },
                {
                    label: 'MASSAGE',
                    icon: 'pi pi-bolt',
                    url: '/services-and-pricesp'
                },
            ]
        },
        {
            label: 'Dash Board',
            icon: 'pi pi-envelope',
            url: '/login'
        }
    ];

    const DashboardButton = () => {
        const router = useRouter(); // Using Next.js router
    
        const handleRedirect = () => {
            router.push('/login'); // Replace with your target URL
        };
    
        return (
            <Button label="Dash-Board" onClick={handleRedirect} />
        );
    };
    
    return (
        <div className="main">
            <Menubar model={items} />
            <nav className='menuBar'>
                <ul>
                    <li><Link href="">Home</Link></li>
                    <li><Link href="/services-and-prices">Services</Link></li>
                    <li><Link href="#employer">Employer</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                </ul>
            </nav>
            <div className="brand">
                <Link href=''><h1>Nails & Spa</h1></Link>
            </div>
            <nav className='menuBar'>
                <ul>
                    <li><SocialIcon
                    style={{width: '35px', height: '35px'}}
                    url="https://www.instagram.com/tonynguyen9032/"
                    network="instagram"
                  />{' '}</li>
                    <li><SocialIcon
                    style={{width: '35px', height: '35px'}}
                    url="https://github.com/huy58501"
                    network="github"
                    bgColor="#121415"
                  />{' '}</li>
                    <li><SocialIcon style={{width: '35px', height: '35px'}} url="https://www.linkedin.com/in/tony-nguyen-996710235/" />{' '}</li>
                    <li><DashboardButton /></li>
                </ul>
            </nav>
        </div>
    )
}
        