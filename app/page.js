import Counter from '../components/Counter';

export default function Home() {
    return (
        <main className="content">
            <h1>Next.js Button Counter Project</h1>

            <p className="page_description">
                This page demonstrates the Button Counter tool.
            </p>

            <h2>Default Props Counter</h2>
            <Counter/>

            <hr/>

            <h2>Custom Props Counter</h2>
            <Counter initialCount={5} initialStep={2}/>
        </main>
    );
}