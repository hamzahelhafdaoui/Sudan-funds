"use client"

import type React from "react"

import { useState } from "react"
import { CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

interface DonationFormProps {
  campaignId: string
}

export function DonationForm({ campaignId }: DonationFormProps) {
  const [amount, setAmount] = useState<string>("")
  const [customAmount, setCustomAmount] = useState<string>("")

  const handleAmountSelect = (value: string) => {
    setAmount(value)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setAmount("custom")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const donationAmount = amount === "custom" ? customAmount : amount
    alert(`Processing donation of $${donationAmount} for campaign ${campaignId}`)
    // In a real app, this would connect to a payment processor
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label>Select donation amount</Label>
        <RadioGroup value={amount} onValueChange={handleAmountSelect} className="grid grid-cols-3 gap-2">
          <Label
            htmlFor="amount-25"
            className={`flex cursor-pointer items-center justify-center rounded-md border p-2 text-center ${
              amount === "25" ? "border-red-600 bg-red-50 text-red-600" : "border-gray-200"
            }`}
          >
            <RadioGroupItem value="25" id="amount-25" className="sr-only" />
            $25
          </Label>
          <Label
            htmlFor="amount-50"
            className={`flex cursor-pointer items-center justify-center rounded-md border p-2 text-center ${
              amount === "50" ? "border-red-600 bg-red-50 text-red-600" : "border-gray-200"
            }`}
          >
            <RadioGroupItem value="50" id="amount-50" className="sr-only" />
            $50
          </Label>
          <Label
            htmlFor="amount-100"
            className={`flex cursor-pointer items-center justify-center rounded-md border p-2 text-center ${
              amount === "100" ? "border-red-600 bg-red-50 text-red-600" : "border-gray-200"
            }`}
          >
            <RadioGroupItem value="100" id="amount-100" className="sr-only" />
            $100
          </Label>
          <Label
            htmlFor="amount-250"
            className={`flex cursor-pointer items-center justify-center rounded-md border p-2 text-center ${
              amount === "250" ? "border-red-600 bg-red-50 text-red-600" : "border-gray-200"
            }`}
          >
            <RadioGroupItem value="250" id="amount-250" className="sr-only" />
            $250
          </Label>
          <Label
            htmlFor="amount-500"
            className={`flex cursor-pointer items-center justify-center rounded-md border p-2 text-center ${
              amount === "500" ? "border-red-600 bg-red-50 text-red-600" : "border-gray-200"
            }`}
          >
            <RadioGroupItem value="500" id="amount-500" className="sr-only" />
            $500
          </Label>
          <Label
            htmlFor="amount-custom"
            className={`flex cursor-pointer items-center justify-center rounded-md border p-2 text-center ${
              amount === "custom" ? "border-red-600 bg-red-50 text-red-600" : "border-gray-200"
            }`}
          >
            <RadioGroupItem value="custom" id="amount-custom" className="sr-only" />
            Custom
          </Label>
        </RadioGroup>
      </div>

      {amount === "custom" && (
        <div className="space-y-2">
          <Label htmlFor="custom-amount">Enter custom amount</Label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
            <Input
              id="custom-amount"
              type="number"
              min="1"
              step="1"
              className="pl-7"
              placeholder="Enter amount"
              value={customAmount}
              onChange={handleCustomAmountChange}
              required
            />
          </div>
        </div>
      )}

      <Separator />

      <Button
        type="submit"
        className="w-full bg-red-600 hover:bg-red-700"
        disabled={!amount || (amount === "custom" && !customAmount)}
      >
        <CreditCard className="mr-2 h-4 w-4" />
        Donate Now
      </Button>
    </form>
  )
}
