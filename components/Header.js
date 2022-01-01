

const Header = () => {
    return (
        <div className="grid grid-cols-12 items-center  p-4 bg-white   left-0 right-0 top-0 text-right">
            <div className="col-span-6 px-0">
                <img src="/assets/images/language.png"/>
            </div>
            <div className="flex justify-end items-center col-span-6">
                <a className="col-span-2 ml-2" href="/" >جستجو <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </a> 
                <a className="col-span-2 ml-2" href="/" >محصولات</a> 
                <a className="col-span-2 ml-2" href="/" >منواصلی</a> 
            <img src="/assets/images/Ronix-Logo.png" className="ml-2"/>
            </div>
            
        </div>
    )
}

export default Header;
