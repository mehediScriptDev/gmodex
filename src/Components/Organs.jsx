import privatelogo from '../Images/private.png'

const Organs = () => {
    return (
        <div>
            <h1 className="font-redblood text-center pt-3 text-2xl sm:text-4xl lg:text-4xl text-gray-800">Without login you can't view this page.</h1>
            <div className='py-2 flex justify-center items-center'>
                <img src={privatelogo} alt="bannerimg" />
            </div>
        </div>
    );
};

export default Organs;