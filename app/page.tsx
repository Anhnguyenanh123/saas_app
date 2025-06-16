import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
    return (
        <main>
            <h1 className="text-2xl underline">Popular Section</h1>
            <section className="home-section">
                <CompanionCard
                    id="1"
                    name="Sasha"
                    topic="React"
                    subject="JavaScript"
                    duration="100"
                    color="#ffda6e"
                />
                <CompanionCard
                    id="2"
                    name="Sasha"
                    topic="React"
                    subject="JavaScript"
                    duration="100"
                    color="#ffda6e"
                />
                <CompanionCard
                    id="2"
                    name="Sasha"
                    topic="React"
                    subject="JavaScript"
                    duration="100"
                    color="#ffda6e"
                />
            </section>

            <section className="home-section">
                <CompanionList
                    title="Recent Session"
                    companions={recentSessions}
                    className="w-2/3 max-lg:w-full"
                />
                <CTA/>
            </section>
        </main>
    )
}
export default Page
