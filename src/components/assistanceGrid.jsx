const FeatureGrid = () => {
    const features = [
      { title: "Topic & FAQ", icon: "bi-chat-dots" },
      { title: "Payments & Bills", icon: "bi-credit-card" },
      { title: "Customer Support", icon: "bi-headset" },
      { title: "Area Coverage", icon: "bi-globe" },
    ];
  
    return (
      <div className="flex justify-center items-center py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-[7rem]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex group flex-col items-center gap-5 text-center space-y-4"
            >
              <div className="w-[180px] group-hover:bg-red-600 h-[180px] flex justify-center items-center bg-gray-200 rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:shadow-xl">
                <i className={`bi ${feature.icon} text-red-600 group-hover:text-gray-200 text-5xl`}></i>
              </div>
              <h2 className="text-lg font-semibold text-gray-200 transition-all duration-300">{feature.title}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FeatureGrid;
  