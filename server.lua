ESX = nil
local connectedPlayers = {}
--jobs
local police = 0
local nopo = 0
local rahvar = 0
local sheriff = 0
local artesh = 0 -- x
local fbi = 0
local sepah = 0
local setadkol = 0
local mechanic = 0 -- x
local taxi = 0
local dadgostari = 0
local ambulance = 0
local weazel = 0
--Robs
local Bank = 0
local Feleca = 0
local Minibank = 0
local SheriffBank=0
local Javahery = 0
local Bime = 0
local Cargo = 0
local JewelerySheriff = 0
local mythic = 0
local shop = 0


TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

ESX.RegisterServerCallback('esx_scoreboard:getConnectedPlayers', function(source, cb)
	cb(connectedPlayers)
end)

AddEventHandler('esx:setJob', function(playerId, job, lastJob)
	connectedPlayers[playerId].job = job.name

	TriggerClientEvent('esx_scoreboard:updateConnectedPlayers', -1, connectedPlayers)
end)

ESX.RegisterServerCallback("scoreboard:getPlayersJob", function(source, cb)
	Citizen.Wait(10)
	police = 0
	nopo = 0
	sheriff = 0
	setadkol = 0
	rahvar = 0
	sepah = 0
	fbi = 0
	artesh = 0
	mechanic = 0
	dadgostari = 0
	taxi = 0
	ambulance = 0
	weazel = 0
	local players = ESX.GetPlayers()
    for i=1, #players, 1 do
		local xPlayer = ESX.GetPlayerFromId(players[i])
		if xPlayer then 
			if xPlayer.job.name == "fbi" then
				fbi = fbi + 1
			elseif xPlayer.job.name == "sheriff" then
				sheriff  = sheriff  + 1
			elseif xPlayer.job.name == "dadgostari" then
				dadgostari  = dadgostari  + 1
			elseif xPlayer.job.name == "setadkol" then
				setadkol  = setadkol  + 1
			elseif xPlayer.job.name == "sepah" then
				sepah  = sepah  + 1
			elseif xPlayer.job.name == "police" then
				police = police + 1
			elseif xPlayer.job.name == "nopo" then
				nopo = nopo + 1
			elseif xPlayer.job.name == "artesh" then
				artesh = artesh + 1
			elseif xPlayer.job.name == "rahvar" then
				rahvar = rahvar + 1
			elseif xPlayer.job.name == "mecano" then
				mechanic = mechanic + 1
			elseif xPlayer.job.name == "taxi" then
				taxi = taxi + 1
			elseif xPlayer.job.name == "ambulance" then
				ambulance = ambulance + 1
			elseif xPlayer.job.name == "weazel" then
				weazel = weazel + 1
			end
		end
    end

    cb({
        ["police"] = police,
		["nopo"] = nopo,
		["sheriff"] = sheriff,
		["fbi"] = fbi,
		["rahvar"] = rahvar,
		["dadgostari"] = dadgostari,
		["artesh"] = artesh,
		["sepah"] = sepah,
		["setadkol"] = setadkol,
		["mechanic"] = mechanic,
		["taxi"] = taxi,
		["ambulance"] = ambulance,
		["weazel"] = weazel

    })
end)

AddEventHandler('esx:playerLoaded', function(playerId, xPlayer)
	AddPlayerToScoreboard(xPlayer, true)
end)

AddEventHandler('esx:playerDropped', function(playerId)
	connectedPlayers[playerId] = nil

	TriggerClientEvent('esx_scoreboard:updateConnectedPlayers', -1, connectedPlayers)
end)


AddEventHandler('onResourceStart', function(resource)
	if resource == GetCurrentResourceName() then
		Citizen.CreateThread(function()
			Citizen.Wait(1000)
			AddPlayersToScoreboard()
		end)
	end
end)

function AddPlayerToScoreboard(xPlayer, update)
	local playerId = xPlayer.source

	connectedPlayers[playerId] = {}

	if update then
		TriggerClientEvent('esx_scoreboard:updateConnectedPlayers', -1, connectedPlayers)
	end

end

ESX.RegisterServerCallback('GetAllPlayersRV', function(source, cb)
	local allpl = 0
	local tedadplayer = 0
	local players = ESX.GetPlayers()

	for i=1, #players, 1 do
		allpl = allpl +1
		
	end
	tedadplayer = allpl
	cb(tedadplayer)
end)

ESX.RegisterServerCallback('scoreboard:gettime', function(source, cb)
	local time = os.date("*t")
	local data = string.format("%02d:%02d:%02d", time.hour, time.min, time.sec)
	cb(data)
end)

function AddPlayersToScoreboard()
	local players = ESX.GetPlayers()

	for i=1, #players, 1 do
		local xPlayer = ESX.GetPlayerFromId(players[i])
		AddPlayerToScoreboard(xPlayer, false)
		
	end

	TriggerClientEvent('esx_scoreboard:updateConnectedPlayers', -1, connectedPlayers)
end

ESX.RegisterServerCallback("scoreboard:getRobsCd", function(source, cb)

	cb({
		cargo=os.time() - Cargo - 14400,		--!Time To Second
		jewelery=os.time() - Javahery - 1800,
		Bimeh=os.time() - Bime - 5400,
		Bank=os.time() - Bank - 7200,
		SheriffBank=os.time() - SheriffBank - 7200,
		Minibank=os.time() - Minibank - 420,
		Feleca=os.time() - Feleca - 7200,
		JewelerySheriff=os.time() - JewelerySheriff - 1800,
		mythic=os.time() - mythic - 5400,
		shop=os.time() - shop - 240,
	})
end)


AddEventHandler("SetRobberyCoolDown", function(Rob)
	if Rob == "jewelery" then 
		Javahery = os.time()
	elseif Rob == "Cargo" then 
		Cargo = os.time()
	elseif Rob == "Bimeh" then 
		Bime = os.time()
	elseif Rob == "Bank" then 
		Bank = os.time()
	elseif Rob == "SheriffBank" then 
		SheriffBank = os.time()
	elseif Rob == "Feleca" then 
		Feleca = os.time()
	elseif Rob == "shop" then 
		shop = os.time()
	elseif Rob == "Minibank" then 
		Minibank = os.time()
	elseif Rob == "JewelerySheriff" then 
		JewelerySheriff = os.time()
	elseif Rob == "mythic" then 
		mythic = os.time()
	end
end)



function convertSecondsToTime(seconds)

    local hours = math.floor(seconds / 3600)
    seconds = seconds % 3600


    local minutes = math.floor(seconds / 60)
    seconds = seconds % 60


    local remainingSeconds = seconds

    return hours, minutes, remainingSeconds
end