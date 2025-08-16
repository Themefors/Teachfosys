import { Button } from "@/Components/ui/button";
import Link from "next/link";

const WhoWeAre = () => {
    return (
        <section className="contianer mx-auto " >
            <div className="flex ">
                <div>
                    <h3>Who We Are</h3>
                    <h2>Your partners for digital success</h2>
                    <p>We’re a team of expert designers, web developers and marketers who’ve been delivering digital success for more than a decade. We excel at marketing websites, innovative web apps and mobile applications.</p>
                </div>
                <div>
                    <Link href="/services">
                        <Button
                            className="bg-[#55e76d] text-white px-6 h-12 text-[18px] font-medium transition-all duration- ease-in-out hover:bg-[#4dd663] hover:scale-105 hover:shadow-md active:scale-95"
                        >
                            Our Services
                        </Button>
                    </Link>
                </div>
            </div>

            <div>
                <div>
                    
                </div>
                <div></div>
            </div>
        </section>
    );
};

export default WhoWeAre;