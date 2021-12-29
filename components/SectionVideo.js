
const SectionVideo = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-4 bg-[url('/assets/images/bk-img2.jpg')] bg-fixed bg-contain"></div>
            <div className="col-span-8 flex justify-end p-4 bg-red-500">
            <div className='relative col-span-4 px-0 video-item overflow-hidden cursor-pointer' >
                <img className='img-fluid all-transition' width="70%" src="/assets/images/video-cover.jpg"/>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-20 bottom-14 translate-x-full translate-x-2/3 left-0 transition-all duration-500" width="50" height="50" viewBox="0 0 70 70">
                    <path id="Path_2897" data-name="Path 2897" d="M37,2A35,35,0,1,0,72,37,35.013,35.013,0,0,0,37,2ZM30,52.75V21.25L51,37Z" transform="translate(-2 -2)" fill="#fff" />
                </svg>
            </div>
            <div className='relative col-span-4 px-0 video-item overflow-hidden cursor-pointer' >
                <img className='img-fluid all-transition' width="70%"  src="/assets/images/video-cover.jpg"/>
                <svg className="absolute left-20 bottom-14 translate-x-full translate-x-2/3 left-0 transition-all duration-500" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 70 70">
                    <path id="Path_2897" data-name="Path 2897" d="M37,2A35,35,0,1,0,72,37,35.013,35.013,0,0,0,37,2ZM30,52.75V21.25L51,37Z" transform="translate(-2 -2)" fill="#fff" />
                </svg>
            </div>
            <div className='relative col-span-4 px-0 video-item overflow-hidden cursor-pointer' >
                <img className='img-fluid all-transition' width="70%"  src="/assets/images/video-cover.jpg"/>
                <svg className="absolute left-20 bottom-14 translate-x-full translate-x-2/3 left-0 transition-all duration-500" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 70 70">
                    <path id="Path_2897" data-name="Path 2897" d="M37,2A35,35,0,1,0,72,37,35.013,35.013,0,0,0,37,2ZM30,52.75V21.25L51,37Z" transform="translate(-2 -2)" fill="#fff" />
                </svg>
            </div>
            </div>
        </div>
    )
}

export default SectionVideo
// position: absolute;
// z-index: 1;
// left: 50%;
// top: 50%;
// transform: translate(-50%, -50%);
// transition: all 0.5s;