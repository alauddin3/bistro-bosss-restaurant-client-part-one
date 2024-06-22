const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-3/12 mx-auto text-center my-8">
            <p className="text-yellow-600 py-4">--- {heading} --</p>
            <h3 className="text-3xl uppercase border-y-4 py-4">{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;