import React, { Suspense } from 'react';
import ProjectContent from '@/app/showcase/[slug]/projectdetails';;
export default function ProjectDetails(props: any) {
    return (
        <>
            <Suspense fallback={<div className="min-h-screen bg-white" />}>
                <ProjectContent {...props} />
            </Suspense>
            <div className="bg-gray-100">
            </div>
        </>
    );
}