import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";

const usd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export function RoiCalculator() {
  const [employees, setEmployees] = useState(4);
  const [hours, setHours] = useState(8);
  const [rate, setRate] = useState(32);

  const result = useMemo(() => {
    const weeklyHours = employees * hours;
    const recoverable = weeklyHours * 0.6;
    const monthly = recoverable * 4.33 * rate;
    return {
      recoverable: Math.round(recoverable),
      monthly,
      annual: monthly * 12,
    };
  }, [employees, hours, rate]);

  const inputs = [
    {
      id: "employees",
      label: "Employees involved in repetitive work",
      value: employees,
      set: setEmployees,
      min: 1,
      max: 50,
      step: 1,
      display: `${employees}`,
    },
    {
      id: "hours",
      label: "Hours spent per week (each)",
      value: hours,
      set: setHours,
      min: 1,
      max: 40,
      step: 1,
      display: `${hours} hrs`,
    },
    {
      id: "rate",
      label: "Average hourly cost",
      value: rate,
      set: setRate,
      min: 15,
      max: 150,
      step: 1,
      display: usd(rate),
    },
  ];

  return (
    <div className="glass grid gap-8 p-6 sm:p-9 lg:grid-cols-2">
      <div className="space-y-7">
        {inputs.map((input) => (
          <div key={input.id}>
            <div className="flex items-baseline justify-between gap-4">
              <label htmlFor={input.id} className="text-sm text-muted-foreground">
                {input.label}
              </label>
              <span className="font-display text-base font-semibold">{input.display}</span>
            </div>
            <Slider
              id={input.id}
              className="mt-3"
              value={[input.value]}
              min={input.min}
              max={input.max}
              step={input.step}
              onValueChange={(v) => input.set(v[0] ?? input.min)}
              aria-label={input.label}
            />
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-primary/25 bg-primary/[0.07] p-6">
        <p className="eyebrow">Illustrative outcome</p>
        <dl className="mt-5 space-y-5">
          <div>
            <dt className="text-sm text-muted-foreground">Potential hours recovered / week</dt>
            <dd className="font-display text-3xl font-semibold text-brand-gradient">
              {result.recoverable} hrs
            </dd>
          </div>
          <div>
            <dt className="text-sm text-muted-foreground">Estimated monthly operational value</dt>
            <dd className="font-display text-3xl font-semibold">{usd(result.monthly)}</dd>
          </div>
          <div>
            <dt className="text-sm text-muted-foreground">Estimated annual value</dt>
            <dd className="font-display text-3xl font-semibold">{usd(result.annual)}</dd>
          </div>
        </dl>
        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Estimates are illustrative and depend on workflow complexity and implementation.
        </p>
      </div>
    </div>
  );
}