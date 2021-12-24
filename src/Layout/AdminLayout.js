import React from 'react'
import LayoutContentAdmin from '../Admin/LayoutContentAdmin/LayoutContentAdmin';
import Header from './../User/components/Header/Header';

export default function AdminLayout({children}) {
    return (
    <div className="adminLayout">
        <Header />
        <LayoutContentAdmin> {children}</LayoutContentAdmin>
    </div>
    )
}
