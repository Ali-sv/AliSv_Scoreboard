ESX = nil
CreateThread(function()
    while ESX == nil do
        TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
        Wait(1)
	end
end)
local visiblemenu = false


function milad()
	Citizen.Wait(50)
	-- ESX.TriggerServerCallback('Morphy_RobSystem:getRobsCd', function(data)
	-- 	SendNUIMessage({action = 'updateHeists', heists = data})
	-- end)
	ESX.TriggerServerCallback('scoreboard:getPlayersJob', function(data)
    	SendNUIMessage({action = 'updateJobs', jobs = data})
	end)
	ESX.TriggerServerCallback('scoreboard:gettime', function(data)
    	SendNUIMessage({action = 'updateTime', data = data})
	end)

end

Citizen.CreateThread(function()
	while true do
		if visiblemenu then
			ESX.TriggerServerCallback('scoreboard:gettime', function(data)
				SendNUIMessage({action = 'updateTime', data = data})
			end)
		end
		Citizen.Wait(1000)
	end
end)

function AllPlayers()
	Citizen.Wait(50)
	ESX.TriggerServerCallback('GetAllPlayersRV', function(cuant)
		SendNUIMessage({
			action = 'updatePlayers',
			players_counts   = cuant
		})
	end)
end

function ShowScoreBoard()
	SendNUIMessage({
        action = "show"
    })
	SetNuiFocus(true,true)
	visiblemenu = true
end

function HideScoreBoard()
	SendNUIMessage({
        action = "hide"
    })
	SetNuiFocus(false,false)
	visiblemenu = false
end


AddEventHandler("onKeyDown", function(key)
	if key == "f10" then
		ShowScoreBoard()
		milad()
		AllPlayers()
	end
end)



RegisterNUICallback('close', function(data, cb)
	SetNuiFocus(false,false)
	visiblemenu = false
end)

RegisterNUICallback('Timer', function(data, cb)
	Citizen.Wait(400)
	if data.rob == "Bimeh" then 
		ESX.TriggerServerCallback('scoreboard:getRobsCd', function(data)
			SendNUIMessage({action = 'updatetimer', timer = data.Bimeh})
		end)
	elseif data.rob == "Cargo" then 
		ESX.TriggerServerCallback('scoreboard:getRobsCd', function(data)
			SendNUIMessage({action = 'updatetimer', timer = data.cargo})
		end)
	elseif data.rob == "shop" then 
		ESX.TriggerServerCallback('scoreboard:getRobsCd', function(data)
			SendNUIMessage({action = 'updatetimer', timer = data.shop})
		end)
	elseif data.rob == "Bank" then 
		ESX.TriggerServerCallback('scoreboard:getRobsCd', function(data)
			SendNUIMessage({action = 'updatetimer', timer = data.Bank})
		end)
	elseif data.rob == "Minibank" then 
		ESX.TriggerServerCallback('scoreboard:getRobsCd', function(data)
			SendNUIMessage({action = 'updatetimer', timer = data.Minibank})
		end)
	elseif data.rob == "SheriffBank" then 
		ESX.TriggerServerCallback('scoreboard:getRobsCd', function(data)
			SendNUIMessage({action = 'updatetimer', timer = data.SheriffBank})
		end)
	elseif data.rob == "Feleca" then 
		ESX.TriggerServerCallback('scoreboard:getRobsCd', function(data)
			SendNUIMessage({action = 'updatetimer', timer = data.Feleca})
		end)
	elseif data.rob == "JewelerySheriff" then 
		ESX.TriggerServerCallback('scoreboard:getRobsCd', function(data)
			SendNUIMessage({action = 'updatetimer', timer = data.JewelerySheriff})
		end)
	elseif data.rob == "mythic" then 
		ESX.TriggerServerCallback('scoreboard:getRobsCd', function(data)
			SendNUIMessage({action = 'updatetimer', timer = data.mythic})
		end)
	elseif data.rob == "jewelery" then 
		ESX.TriggerServerCallback('scoreboard:getRobsCd', function(data)
			SendNUIMessage({action = 'updatetimer', timer = data.jewelery})
		end)
	end
	
end)


RegisterNetEvent('esx_scoreboard:updateConnectedPlayers')
AddEventHandler('esx_scoreboard:updateConnectedPlayers', function(connectedPlayers)
	UpdatePlayerTable(connectedPlayers)

end)






function UpdatePlayerTable(connectedPlayers)

	local players = 0

	for k,v in pairs(connectedPlayers) do


		players = players + 1

	
	end

	SendNUIMessage({
		action = 'updateInfo',
		player_count   = players
	})


end