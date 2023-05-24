
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto my-8 text-center md:w-3/12">
            <p className="mb-2 text-yellow-500">---{heading}---</p>
            <h3 className="py-4 text-3xl uppercase border-y-4">{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;