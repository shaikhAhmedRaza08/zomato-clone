
const navigation = [
    { id: 1,name: 'Product', href: '#', className: 'basis-1/4' },
    { id: 2,name: 'Features', href: '#', className: 'basis-1/4' },
    { id: 3,name: 'Marketplace', href: '#', className: 'basis-1/4' },
    { id: 4,name: 'Company', href: '#', className: 'basis-1/4' },
]

const AppHeader = () => {
    return (
        <header className='container mx-auto'>
            <ul className='flex flex-row justify-between'>
                {
                    navigation.map(item => (
                        <li key={item.id} className={item.className}><a href={item.href}>{item.name}</a></li>
                    ))
                }
            </ul>
        </header>
    )
}

export default AppHeader
