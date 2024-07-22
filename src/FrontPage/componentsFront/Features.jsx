import LayoutEffect from "./LayoutEffect";
import SectionWrapper from "./SectionWrapper";


const Features = () => {

    const featuresList = [
        {
            title: "Interactive Plotly Charts",
            desc: "Leverage the power of Plotly to create dynamic, interactive charts that bring your data to life."
        },
        {
            title: "Real-Time Data Updates",
            desc: "Watch your visualizations evolve in real-time as new data flows in, ensuring you always have the latest insights."
        },
        {
            title: "Extensive Chart Library",
            desc: "Choose from a wide range of chart types including line, bar, scatter, pie, and more to best represent your data."
        },
        {
            title: "Chart Export Functionality",
            desc: "Easily download your charts in various formats for use in presentations, reports, or further analysis."
        },
        {
            title: "Custom Chart Styling",
            desc: "Tailor the appearance of your charts with customizable colors, fonts, and layouts to match your brand or preferences."
        },
        {
            title: "Data Integration Tools",
            desc: "Seamlessly connect to various data sources to automatically populate and update your visualizations."
        }
    ]

    return (
        <SectionWrapper>
            <div id="features" className="custom-screen text-gray-300">
                <LayoutEffect
                    className="duration-1000 delay-300"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0 translate-y-6"
                    }}
                >
                    <div className="max-w-xl mx-auto text-center">
                    </div>
                </LayoutEffect>
                <LayoutEffect
                    className="duration-1000 delay-500"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0"
                    }}
                >
                    <div className="relative mt-12">
                        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {
                                featuresList.map((item, idx) => (
                                    <li key={idx} className="space-y-3 p-4 rounded-xl border border-gray-800"
                                        style={{
                                            background: "radial-gradient(157.73% 157.73% at 50% -29.9%, rgba(203, 213, 225, 0.16) 0%, rgba(203, 213, 225, 0) 100%)"
                                        }}
                                    >
                                        <h3 className="text-lg text-gray-50 font-semibold">
                                            {item.title}
                                        </h3>
                                        <p>
                                            {item.desc}
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </LayoutEffect>
            </div>
        </SectionWrapper>
    )
}

export default Features