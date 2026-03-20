import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, PlayCircle } from "lucide-react";

const steps = [
  { id: 1, name: "Round Table", owner: "QA Lead", status: "Done" },
  { id: 2, name: "Code Replication", owner: "DevOps", status: "In Progress" },
  { id: 3, name: "Data Migration", owner: "DB Team", status: "Pending" },
  { id: 4, name: "Catch Testing", owner: "QA", status: "Pending" },
  { id: 5, name: "Smoke Testing", owner: "QA", status: "Pending" }
];

export default function DeploymentTracker() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">🚀 Deployment Tracker</h1>

      <div className="grid gap-4">
        {steps.map((step) => (
          <Card key={step.id} className="rounded-2xl shadow">
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <h2 className="text-lg font-semibold">{step.name}</h2>
                <p className="text-sm text-gray-500">Owner: {step.owner}</p>
                <p className="text-sm mt-1">
                  Status: 
                  <span className={`ml-2 font-medium ${
                    step.status === "Done"
                      ? "text-green-600"
                      : step.status === "In Progress"
                      ? "text-yellow-600"
                      : "text-gray-500"
                  }`}>
                    {step.status}
                  </span>
                </p>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-1">
                  <PlayCircle size={16} /> Start
                </Button>
                <Button className="flex items-center gap-1">
                  <CheckCircle size={16} /> Complete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
