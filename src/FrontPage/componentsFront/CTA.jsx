import LayoutEffect from "./LayoutEffect"
import NavLink from "./NavLink"
import Form from "../../components/dataOperations/Components/Form"
import GradientWrapper from "./GradientWrapper"


const CTA = (props) => (
    <section>
        <GradientWrapper wrapperClassName="max-w-xs h-[13rem] top-12 inset-0">
            <div className="custom-screen py-28 relative">
                <LayoutEffect
                    className="duration-1000 delay-300"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0 translate-y-6"
                    }}
                >
                    <div className="relative z-10">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                            VISUALIZE, INTERACT, UNDERSTAND: YOUR DATA STORY
                            </h2>
                            <p className="mt-5 text-gray-300">
                            DataProbe is your ultimate solution! Our advanced visualization platform empowers you to create dynamic, interactive charts that transform data into clear, actionable insights for any audience.                            </p>
                        </div>
                        <div className="mt-5 flex justify-center font-medium text-sm">
                            <Form setData={props.setData} setFile={props.setFile}/>
                        </div>
                    </div>
                </LayoutEffect>
                <img
                    src="bg-pattern.webp"
                    className="w-full h-full object-cover m-auto absolute inset-0 pointer-events-none"
                    alt="Background pattern"
                />
            </div>
        </GradientWrapper>
    </section>
)

export default CTA